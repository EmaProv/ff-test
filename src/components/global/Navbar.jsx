import React from "react";
import { CgShoppingCart } from "react-icons/cg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="nav-logo">
        <h3>FutureFashon</h3>
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
