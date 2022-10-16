import React from "react";
import { CgShoppingCart } from "react-icons/cg";
import { Link } from "react-router-dom";

function Navbar({ mob }) {
  return (
    <nav>
      <div className="nav-logo">
        {mob ? (
          <Link to="/">
            <h3>FF</h3>
          </Link>
        ) : (
          <Link to="/">
            <h3>FutureFashon</h3>
          </Link>
        )}
      </div>

      <div className="nav-action">
        <Link to="/">
          <p>SHOP</p>
        </Link>
        <CgShoppingCart className="nav-action-ico" />
      </div>
    </nav>
  );
}

export default Navbar;
