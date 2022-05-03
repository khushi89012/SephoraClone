import { useEffect, useState } from "react";
import { ProductCard } from "../../StyledComponants/ProductCard";

import "./MainBody.css";

export const Product = () => {
  const [product, setproduct] = useState([]);

  useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
    fetch(`http://localhost:8080/hairdata`)
      .then((d) => d.json())
      .then((data) => {
        setproduct(data);
        console.log(data);
      });
  };

  return (
    <>
      <div id="MainContainer">
        <div id="leftNavigation"></div>
        <div id="productpagecart">
          {product.map((e) => (
            <div id="productCard" key={e.productName}>
              <ProductCard Product={product}>
                <div id="imgDiv">
                  <img src={e.image_url} id="productimg" />
                  <div id="Scrollup_Button">
                    <button>Add To Cart</button>
                    <button>Add to Wishlist</button>
                  </div>
                </div>
                <div id="textDiv">
                  <p>{e.brandname}</p>
                  <p>{e.productName}</p>
                  <p>₹ {e.price}</p>
                </div>
              </ProductCard>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
