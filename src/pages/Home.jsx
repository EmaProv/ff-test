import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { store } from "../redux/store";
import { getProducts } from "../redux/api/productsApi";

import { FaFilter } from "react-icons/fa";
import { MdExpandMore, MdExpandLess } from "react-icons/md";

function Home({ mob }) {
  const [data, setData] = useState([]);
  const [expand, setExpand] = useState(false);

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

  const toggleOpen = () => {
    setExpand(!expand);
  };

  return (
    <div className="home-layout">
      {mob ? (
        <div className="home-filters-mob">
          <div className="home-filters-mob-header" onClick={() => toggleOpen()}>
            <div className="home-filt-mob-header-rgt">
              <FaFilter className="home-filters-mob-header-ico" />
              <h4>FILTRI</h4>
            </div>
            <div className="home-filt-mob-header-lft">
              {expand ? <MdExpandLess /> : <MdExpandMore />}
            </div>
          </div>

          <div
            className={
              expand ? "home-filters-mob-cont show" : "home-filters-mob-cont"
            }
          >
            <div className="home-filter-field-mob">
              <h5>CATEGORIA</h5>
              <ul>
                <li>INFORMATICA</li>
                <li>TELEFONIA</li>
              </ul>
            </div>

            <div className="home-filter-field-mob">
              <h5>MARCA</h5>
              <ul>
                <li>APPLE</li>
                <li>OPPO</li>
                <li>SAMSUNG</li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
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
      )}

      <div className="home-products">
        {data.products && data.products.length > 0 ? (
          <div className="home-products-grid">
            {data.products?.map((p) => (
              <Link to={`/${p.id}`} key={p.id}>
                <div className="home-prod-card">
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
