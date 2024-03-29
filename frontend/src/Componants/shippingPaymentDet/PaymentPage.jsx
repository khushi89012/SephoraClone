/* eslint-disable no-unused-vars */
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { PricingTable } from "./pricingTable";
import { AddForm } from "../AddressFrom/AddForm";
import "./pricingTable.css";
// import { Button } from "../checkoutpage/Button";
export const Payment = () => {
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [showForm, setShowForm] = useState(false);
  //for pay on delivery
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [length,setLength] = useState("");
  const [paymode,setPaymode]= useState("");
  const navigate = useNavigate()
  
  const handlePaymode =(e)=>{
    e.preventDefault()
    setPaymode(e.target[0].value)
    setShow1(false)
                setShow2(false)
                setShow3(false)
                setShow4(false)
  }
  const handlePod = ()=>{
    setShow1(false)
                setShow2(false)
                setShow3(false)
                setShow4(false)
                setPaymode("PayOnDelivery")
  }
  // parsing local storage for cartItems

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("sai"))||[];
    setCart(cartItems);
    let total = 0;
    const totalPrice = cartItems.reduce((sum, product) => {
      const listPrice = product.currentSku.listPrice;
    
      // Convert listPrice to a numeric value (removing "$" and handling ranges)
      const priceRange = listPrice.split('-').map(price => parseFloat(price.replace('$', '').trim()));
    
      // Use the average value for ranges
      const averagePrice = priceRange.reduce((acc, price) => acc + price, 0) / priceRange.length;
    
      return sum + averagePrice;
    }, 0);
    setCartTotal(totalPrice);
  }, []);
  // for address from pop-up
  useEffect(() => {
    const add = JSON.parse(localStorage.getItem("sephoraAddress"))||[];
    if (add) setShowForm(false);
    else setShowForm(true);
  }, []);

  // handle for pay on delivery;
    const z = JSON.parse(localStorage.getItem("sephoraAddress"))||[];
    useEffect(()=>{
     setLength(z)
    },[z,length])

  //handle for alert
  const handleAlert = () => {
   
    const cartItems = JSON.parse(localStorage.getItem("sai"))||[]
     if(cartItems.length==0){
      alert("your cart is empty please add products in cart");
      navigate('/')
      return
     }
     if(paymode==""){
      alert("Please Select payment mode");
      return
    }
    alert("Order Placed thankyou for shopping from sephora");
    localStorage.removeItem("sai")
    navigate('/')
    return
  };

  return (
    <>
      <div className="p_page_wrapper">
        <div className="p_det">
          <div>
            <span>
              <strong>TOTAL PAYABLE AMOUNT</strong>
            </span>
            <span>
              <strong>Rs. {Math.round((cartTotal * 86) / 100)}</strong>
            </span>
          </div>
          <p>
            <strong>PAYMENT METHODS</strong>
          </p>
          <hr />
          <div className="payment_methods">
            <div>
              <label style={{marginLeft:"35px"}} >Credit/ Debit Card</label>{"  "}
              <span onClick={()=>{
                setShow1(true)
                setShow2(false)
                setShow3(false)
                setShow4(false)
              }} className="hellohover" style={{color:"rgb(255,51,153)"     ,cursor: "pointer"
            }}>click me</span>
              <div className={show1 ? "display" : "none"}>
                <form className="form" onSubmit={handlePaymode}>
                  <input value={"Credit/ Debit Card"} type="text" style={{display:"none"}} />
                  <input
                    type="number"
                    placeholder="Enter Card Number"
                    className="i"
                    
                  />
                  <input required type="text" placeholder="Enter Name" className="j" />
                  <input required type="number" placeholder="Enter CVV" className="k" />
                  <input required type="month" placeholder="MM" className="l" />
                  <input required type="date" placeholder="YYYY" className="m" />
                  <input  type="submit" className="n" />
                </form>

              </div>
            </div>
            <div>
              
              <label style={{marginLeft:"35px"}}>Net Banking</label>{"  "}
              <span onClick={()=>{
                setShow1(false)
                setShow2(true)
                setShow3(false)
                setShow4(false)
              }} className="hellohover" style={{color:"rgb(255,51,153)" ,cursor: "pointer"}}>click me</span>
              <div className={show2 ? "display" : "none"}>
                <form className="form" onSubmit={handlePaymode}>
                <input value={"Net Banking"} type="text" style={{display:"none"}} />

                  <input
                    type="number"
                    placeholder="Enter Card Number"
                    className="i"
                    
                  />
                  <input required type="text" placeholder="Enter Name" className="j" />
                  <input required type="number" placeholder="Enter CVV" className="k" />
                  <input required type="month" placeholder="MM" className="l" />
                  <input required type="date" placeholder="YYYY" className="m" />
                  <input type="submit" className="n"  />
                </form>

              </div>
            </div>
            <div>
             
              <label style={{marginLeft:"35px"}}>
                Pay on Delivery (UPI,Wallet,Card and Cash){" "}<span 
                className="hellohover"
                onClick={()=>handlePod()}
                 style={{color:"rgb(255,51,153)",cursor: "pointer"}} >click me</span><br/>
                <span>(additional charge Rs. 40)</span>
              </label>
            </div>
          </div>
          {paymode!=="" ? <p>Selected method: <span style={{color:"rgb(255,51,153)"}}>
          {paymode}</span> </p>:null}
        </div>
        <div className="price_det">
          <PricingTable total={cartTotal} />
          <div className="continue" onClick={handleAlert}>
            {cart.length === 0 ? <span>Go Shopping</span> :
              <span style = {{color : "white"}}>PLACE ORDER</span>}
          </div>
        </div>
      </div>
      {z.length==0 ? <AddForm setShowForm={setShowForm} />  : null}
    </>
  );
};
