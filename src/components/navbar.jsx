import React from "react";

function NavBar({ activeSection, handleScrollToSection }){
  return (
    <div className="navBar">
      <h2 className="shopName">Beef Inn</h2>
      <div className="pageItems">
        <ul>
          <li id="pageLists"  className={activeSection === "homepage" ? "active" : ""}
          onClick={() => handleScrollToSection("homepage")}>Home</li>
          <li id="pageLists" className={activeSection === "about" ? "active" : ""}
          onClick={() => handleScrollToSection("about")}>About</li>
          <li id="pageLists" className={activeSection === "products" ? "active" : ""}
          onClick={() => handleScrollToSection("products")}>Products</li>
          <li id="pageLists" className={activeSection === "benefits" ? "active" : ""}
          onClick={() => handleScrollToSection("benefits")}>Benefits</li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar;