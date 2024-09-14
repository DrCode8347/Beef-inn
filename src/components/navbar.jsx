import React from "react";

function NavBar(){
  return (
    <div className="navBar">
      <h2 className="shopName">Beef Inn</h2>
      <div className="pageItems">
        <ul>
          <li className="pageLists">HomePage</li>
          <li className="pageLists">About</li>
          <li className="pageLists">Products</li>
          <li className="pageLists">Benefits</li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar;