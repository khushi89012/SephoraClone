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
    const data =[{ 
            "id" : 1,  
            "image_url": "https://cdn.shopify.com/s/files/1/0637/6147/products/AsSeenin-2copy_720x.png?v=1634793915",
            "image2_url": "https://cdn.shopify.com/s/files/1/0637/6147/products/TheLaurenStyle-79_1.jpg?v=1633240353",
            "brandname" : "MAYA CHIP",
            "productName" : "Power Fol Eyelash | Eyebrow Treatment",
            "price" :  4320,
            "available" : "3 more color",
            "background":"hair"
        },{ 
            "id" : 2,  
            "image_url": "https://cdn.shopify.com/s/files/1/0637/6147/products/AsSeenin-2copy_720x.png?v=1634793915",
            "image2_url": "https://cdn.shopify.com/s/files/1/0637/6147/products/TheLaurenStyle-79_1.jpg?v=1633240353",
            "brandname" : "MAYA CHIP",
            "productName" : "Power Fol Eyelash | Eyebrow Treatment",
            "price" :  4320,
            "available" : "3 more color",
            "background":"hair"
        }
        ,{   
            "id" : 3, 
            "image_url": "https://cdn.shopify.com/s/files/1/0637/6147/products/AsSeenin-2copy_720x.png?v=1634793915",
            "image2_url": "https://cdn.shopify.com/s/files/1/0637/6147/products/TheLaurenStyle-79_1.jpg?v=1633240353",
            "brandname" : "MAYA CHIP",
            "productName" : "Power Fol Eyelash | Eyebrow Treatment",
            "price" :  4320,
            "available" : "3 more color",
            "background":"hair"
        }
    ]
    localStorage.setItem("sai",JSON.stringify(data))

    //price updation
    const priceUpdate = ()=>{
        const cartItems = JSON.parse(localStorage.getItem("sai")) 
        setCart(cartItems)
        let total = 0;
        cartItems.forEach(ele=>{
             total += ele.price
        })
        setCartTotal(total)
        console.log(cartItems)
    }
    //parsing data from localstorage
    const [cart, setCart] = useState([])
    useEffect(()=>{
      
        priceUpdate()
    },[])

    // remove item
    const handleRemove = (id)=>{

       const remainingItems = cart.filter((item)=> item.id !== id) 
       setCart(remainingItems)
       localStorage.setItem("sai",JSON.stringify(remainingItems))
       priceUpdate()    

    }
    const [address,setAddress] = useState({})
    //parsing address data from local storage
    useEffect(()=>{
        let add = JSON.parse(localStorage.getItem("sephoraAddress"))
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
                    <div><span>{address.name}</span></div> 
                     <div><span>{address.number} / {address.altNumber}</span></div> 
                    </> : null
}
               </div>
           {cart.map((ele,i)=>
            <div key = {i} className = "product_det">
                <img className = "image" src = {ele.image_url} alt = "product Img"/>
                <div>
                    <ul style={{listStyle:"none"}}>
                        <li>{ele.brandname}</li>
                        <li><strong>{ele.productName}</strong></li>
                        <li><span>{ele.available}</span></li>
                        <li><strong>Price - {ele.price}/-</strong></li>
                    </ul>
                <button onClick = {()=>handleRemove(ele.id)}>Remove</button>
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
                
               <div className="continue" onClick={()=>setCurrState("payment")}>
                   <span >CONTINUE</span>
               </div>
           </div>
        </div>
    )
}



