import "./App.css";
import { Routes, Route } from "react-router-dom"
import { ProductDetails } from "./Componants/Product-Detail-Page/ProductDetails";
import { HairProduct } from "./Componants/Product-Page/HairProduct";
import { MackupProduct } from "./Componants/Product-Page/MackUpProduct";

function App() {
  return (
    <div className="App">
      {/* <HairProduct /> */}
      {/* <MackupProduct/> */}
      <Routes>
      <Route path='/' element={<HairProduct/>} ></Route>
      <Route path='/productdetail' element={<ProductDetails/>} ></Route>
      </Routes>
      

    </div>
  );
}

export default App;
