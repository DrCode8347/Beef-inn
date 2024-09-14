import React from "react";
import ProductContainer from "../components/productContainer";
import image1 from "../assets/ground.jpg";
import image2 from "../assets/steak.jpg";
import image3 from "../assets/specialcuts.jpg";
import image4 from "../assets/roast.jpg";

export default function Products() {
  const products = [
    { productName: 'Ground', imageitem: image1,description:'ideal for burgers, tacos, etc.' },
    { productName: 'Steak', imageitem: image2,description:'ribeye, sirloin, filet mignon' },
    { productName: 'Special Cuts', imageitem: image3,description:'short ribs, beef shanks' },
    { productName: 'Roast', imageitem: image4,description:'chuck roast, brisket' },
  ];

  return (
    <div className="products">
      <h2 className="aboutUs">Our Products</h2>
      <div className="gridcontainer">
        {products.map((product, index) => (
          <ProductContainer
            key={index}
            productName={product.productName}
            imageitem={product.imageitem}
            description={product.description}
          />
        ))}
      </div>
      <p className="aboutText">
        All our beef is carefully aged to enhance its natural tenderness and flavor. 
        Whether you’re grilling a perfect steak or slow-cooking a hearty roast, our 
        cuts will provide an unmatched taste experience.
      </p>
    </div>
  );
}
