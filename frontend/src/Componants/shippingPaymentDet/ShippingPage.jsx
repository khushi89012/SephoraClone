/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import { PricingTable } from "./pricingTable"
import './shipping.css'
import "./pricingTable.css"
export const Shipping = ({setCurrState}) =>{
    const [shippingAdd, setShippingAdd] = useState([])
    const [cartTotal,setCartTotal] = useState(0) 
    const [showAdd,setShowAdd] = useState(true)
    
    
    //setting data to localstorage
   

  

    //price updation function(updated)
    const priceUpdate = ()=>{
        const cartItems = JSON.parse(localStorage.getItem("sai"))||[]
        setCart(cartItems)
        const totalPrice = cartItems.reduce((sum, product) => {
            const listPrice = product.currentSku.listPrice;
          
            // Convert listPrice to a numeric value (removing "$" and handling ranges)
            const priceRange = listPrice.split('-').map(price => parseFloat(price.replace('$', '').trim()));
          
            // Use the average value for ranges
            const averagePrice = priceRange.reduce((acc, price) => acc + price, 0) / priceRange.length;
          
            return sum + averagePrice;
          }, 0);
        setCartTotal(totalPrice)
    }

      //parsing data from localstorage
      const [cart, setCart] = useState([])
      useEffect(()=>{
         //updated
         priceUpdate();
          
      },[])

      // remove item (updated)
      const handleRemove = (_id)=>{

        const remainingItems = cart.filter((item)=> item.productId !== _id) 
        setCart(remainingItems)
        localStorage.setItem("sai",JSON.stringify(remainingItems))
        priceUpdate()    
 
     }
    const [address,setAddress] = useState({})
    //parsing address data from local storage
    useEffect(()=>{
        let add = JSON.parse(localStorage.getItem("sephoraAddress"))||[]
        if(add){
            setAddress(add)
            setShowAdd(true)
        }
        else {
            setShowAdd(false)
        }

    },[])
    // console.log(address)

    
    return (
        <div className = "s_page_wrapper">
            <div className = "s_det">
               <div className = "s_shipping_address">
                    <div><span>Shipping Options for</span> <span style = {{color:"rgb(255,51,153)",textDecoration:"underline"}}>{}</span></div>
                    <div>Deliver Address</div>
                    {showAdd?
                    <>
                    <div>Name:<span>{address.name}</span></div> 
                    <div>Address:<span>{address.address}</span></div>
                    <div>PinCode:<span>{address.pincode}</span></div>

                     <div>Mobile Number:<span>{address.number}</span></div> 
                    </> : null
}
               </div>
               {/* updated */}
           {cart.map((ele,i)=>
            <div key = {i} className = "product_det">
                <img className = "image" src = {ele.altImage || ele.heroImage} alt = "product Img"/>
                <div>
                    <ul style={{listStyle:"none"}}>
                        <li>{ele.brandName}</li>
                        <li><strong>{ele.displayName}</strong></li>
                        <li><span>{ele.available}</span></li>
                        <li><strong>{ele.currentSku.listPrice}</strong></li>
                    </ul>
                    {/*  updated */}
                    <button onClick = {()=>handleRemove(ele.productId)} id="removebutton">Remove</button>
                </div>
            </div>
           )}
           {cart.length === 0 ? <div style={{fontSize:'large'}}>Your cart is empty!</div> : ''}
           </div>
           <div className="price_det">
               <div className="promo_code">
                   <img src="https://static.nnnow.com/client/assets/images/promotions/icon_promo.png" alt="" />
                   <span>APPLY PROMO CODE</span>
               </div>
               
              <PricingTable total = {cartTotal}/>
       
               <div className="continue" onClick={()=>setCurrState("payment")}>

                   <span>CONTINUE</span>
               </div>
              
           </div>
        </div>
    )
}



