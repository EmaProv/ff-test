import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { store } from "../redux/store";

import { getProducts } from "../redux/api/productsApi";
import { Link } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    try {
      // get dummie json
      getProducts(dispatch);
    } catch (err) {
      console.log(err);
    }

    setData(store.getState().products.products);
  }, [dispatch]);

  return (
    <div className="home-layout">
      <div className="home-filters">
        <div className="home-filter-field">
          <h5>CATEGORIA</h5>
          <ul>
            <li>INFORMATICA</li>
            <li>TELEFONIA</li>
          </ul>
        </div>

        <div className="home-filter-field">
          <h5>MARCA</h5>
          <ul>
            <li>APPLE</li>
            <li>OPPO</li>
            <li>SAMSUNG</li>
          </ul>
        </div>
      </div>

      <div className="home-products">
        {data.products && data.products.length > 0 ? (
          <div className="home-products-grid">
            {data.products?.map((p) => (
              <Link to={`/${p.id}`}>
                <div className="home-prod-card" key={p.id}>
                  <img
                    src={p?.images[0]}
                    alt="test img"
                    className="home-prod-card-img"
                  />
                  <h5>{p.title}</h5>
                  <p>{p.category}</p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="home-prod-loading">Loading...</div>
        )}
      </div>
    </div>
  );
}

export default Home;
