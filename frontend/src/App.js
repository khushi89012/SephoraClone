<<<<<<< HEAD
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import { ProductDetails } from "./Componants/Product-Detail-Page/ProductDetails";
import { HairProduct } from "./Componants/Product-Page/HairProduct";
import { MackupProduct } from "./Componants/Product-Page/MackUpProduct";
import { Home } from "./Componants/Home/Home";
import { Login } from "./Componants/login/login";
import { CheckOutPage } from "./Componants/checkoutpage/CheckoutPage";
import { Payment } from "./Componants/shippingPaymentDet/PaymentPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/hairproduct" element={<HairProduct />}></Route>
        <Route path="/mackupproduct" element={<MackupProduct />}></Route>
        <Route path="/productdetail" element={<ProductDetails />}></Route>
        <Route path="/checkoutpage" element={<CheckOutPage />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/payment" element={<Payment />}></Route>
      </Routes>
    </div>
  );
}

export default App;
=======

import './App.css';
import { Product } from './Componants/Product-Page/MainBody';

function App() {
  return (
    <div className="App">
      <Product/>
    </div>
  );
}

export default App;
>>>>>>> 711571dcf98ba2077625e06ef0c62b897b7ab3af
