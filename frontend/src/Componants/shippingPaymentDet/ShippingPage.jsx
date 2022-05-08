/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import { PricingTable } from "./pricingTable"
import './shipping.css'
import "./pricingTable.css"
export const Shipping = () =>{
    const [shippingAdd, setShippingAdd] = useState([])
    const [cartTotal,setCartTotal] = useState(0) 
    const [showAdd,setShowAdd] = useState(true)
    
    
    //setting data to localstorage
   

    //parsing data from localstorage
    const [cart, setCart] = useState([])
    useEffect(()=>{
        const cartItems = JSON.parse(localStorage.getItem("sai")) 
        setCart(cartItems)
        let total = 0;
        cartItems.forEach(ele=>{
             total += ele.price
        })
        console.log(total)
        setCartTotal(total)
        
    },[])


    const [address,setAddress] = useState({})
    //parsing address data from local storage
    useEffect(()=>{
        let add = JSON.parse(localStorage.getItem("sephoraAddress"))
        // setAddress(add)
        // else setAddress()
        if(add){
            setAddress(add)
            setShowAdd(true)
        }
        else {
            // setAddress(false)
            setShowAdd(false)
        }

    },[])
    console.log(address)

    
    return (
        <div className = "s_page_wrapper">
            <div className = "s_det">
               <div className = "s_shipping_address">
                    <div><span>Shipping Options for</span> <span style = {{color:"rgb(255,51,153)",textDecoration:"underline"}}>{}</span></div>
                    <div>Deliver Address</div>
                    {showAdd?
                    <>
                    <div><span>{address.name}</span></div> 
                     <div><span>{address.number} / {address.altNumber}</span></div> 
                    </> : null
}
               </div>
           {cart.map((e,i)=>
            <div key = {i} className = "product_det">
                <img className = "image" src = {e.image_url} alt = "product Img"/>
                <div>
                    <ul style={{listStyle:"none"}}>
                        <li>{e.brandname}</li>
                        <li><strong>{e.productName}</strong></li>
                        <li><span>{e.available}</span></li>
                        <li><strong>Price - {e.price}/-</strong></li>
                    </ul>
                </div>
            </div>
           )}
           </div>
           <div className="price_det">
               <div className="promo_code">
                   <img src="https://static.nnnow.com/client/assets/images/promotions/icon_promo.png" alt="" />
                   <span>APPLY PROMO CODE</span>
               </div>
               
              <PricingTable total = {cartTotal}/>
       
               <div className="continue">

                   <span>CONTINUE</span>
               </div>
              
           </div>
        </div>
    )
}



