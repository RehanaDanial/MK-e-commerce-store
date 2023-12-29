import logo from "./logo.svg";
import "./App.css";
import Header from "./Header.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Components/Home/index.jsx";

import ThreeLineSelectButton from "./Threelinesselect.js";
import Nextpage from "./Nextpage.js";

import Table from "./table.js";
// import MyContext from './MyContext.js';
// import ChildComponent from './ChildComponent';
import Addtocartpage from './Addtocartpage.js'
import { CartProvider } from "./CartContext";
import Thirdpage from "./Thirdpage.js";
function App() {
  const contextValue = "Hello from Context!";
  return (
    <>
    <CartProvider val = {contextValue}>
      <BrowserRouter>
        <Header />
        <ThreeLineSelectButton />
        {/* <MainComponent/> */}

        {/* <PictureItem/>
    <PictureSection/>
    <PicsApi/>
     */}
       
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/allProducts" element={<Nextpage />} />
            <Route path="/allProducts" element={<Table />} />
            <Route path="/nextpage" element={<Thirdpage />} />
            <Route path="/Cart" element={<Addtocartpage />} />
            
            {/* <Thirdpage /> */}
           
          </Routes>
        
        <Table />
      </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
