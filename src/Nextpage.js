import React, { useEffect,useState } from 'react';
import { FaStar } from "react-icons/fa";
import Data from './Api/data';
import Card from './Components/Card';
// import Table from './table.js';

function Nextpage() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    console.log(Data.BestSelle,Data.BndslsandDeals,Data.SummerSale, "Data");
    const Arr1 = Data.BestSelle.concat(Data.BndslsandDeals)
    const Arr2 = Arr1.concat(Data.SummerSale)
    setProducts(Arr2)
  }, [Data]);

  return (
    <>
      <div className='pictures-gallary'>
  <div>
    <h1 className='hhh'>All Products</h1>
    <div className='picsgrid'>
      {products.map((picture) => (
        <Card Data={picture}/>
      ))}
    </div>
  </div>
</div>


{/* <Table/> */}
    </>
  )
}

export default Nextpage;












