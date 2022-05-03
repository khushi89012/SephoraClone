import { useEffect, useState } from "react";
import { ProductCard } from "../../StyledComponants/ProductCard";


import "./MainBody.css";

export const Product = () => {
  const [product, setproduct] = useState([]);

  useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
    fetch(`http://localhost:8080/products`)
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
            <div key={e.productId} id="productCard">
              <ProductCard>
              <div id="imgDiv">
                <img src={e.image450} id="productimg" />
                <div id="Scrollup_Button" >
                  <button>Add To Cart</button>
                  <button>Add to Wishlist</button>
                </div>
              </div>
              <div id="textDiv">
                <p>{e.brandName}</p>
                <p>{e.displayName}</p>
                <p>₹ {e.currentSku.listPrice}</p>
              </div>
              </ProductCard>
             </div> 
          ))}
        </div>
      </div>
    </>
  );
};
