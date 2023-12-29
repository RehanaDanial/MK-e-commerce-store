import React, { useEffect } from "react";
import Data from "../Api/data";
import image from "../assets/images/galleryImages/1";
import image12 from "../assets/images/product.jpg";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import Table from "../table";
import Card from "./Card";
import Nextpage from "../Nextpage";
import Blackbutton from "../Blackbutton";


<link
  href="https://www.dafontfree.net/embed/ZGlubmV1emVpdGdyb3Rlc2stbHQtbGlnaHQtcmVndWxhciZkYXRhLzQ2L2QvNTkwNTcvRElOIDMwNjQwIE5ldXplaXQgR3JvdGVzayBMVCBMaWdodC50dGY"
  rel="stylesheet"
  type="text/css"
/>;

const PicsApi = () => {
  useEffect(() => {
    console.log(Data, "ApiData");
  }, [Data]);

  const picturesData = Data.SummerSale;
  const picturesData1 = Data.BestSelle;
  const picturesData2 = Data.BndslsandDeals;
  const PicturesData3 = Data.Gallary;
  const PicturesData4 = Data.Aftergallarry;
  const PicturesData5 = Data.Pakistan;

  return (
    <>
      <div className="pic-button">
        <Link to="/allProducts">
          <img className="pis" src={image} />
        </Link>

        <button className="btn">SHOP NOW</button>
      </div>
      <div>
        <Link to="nextpage"></Link>
      </div>

      <div className="pictures-gallary">
        <div>
          <h1 className="hhh">SUMMER SALE OFFERING</h1>
          <div className="picsgrid">
            {picturesData.slice(0, 8).map((picture) => (
              <Card Data={picture} />
            ))}
          </div>
        </div>
      </div>
<br/>
      <hr />

      <button className="yellowButton">VIEW ALL PRODUCTS</button>
      <div>
        <h1 className="hhh">BESTSELLERS</h1>
        <div className="picsgrid">
          {picturesData1.slice(0, 8).map((picture) => (
            <Card Data={picture} />
          ))}
        </div>
      </div>

      <button className="yellowButton">VIEW ALL PRODUCTS</button>
     <br/>
     <hr/>
<br/>
<br/>
      <div>
        <h3>FEATURED COLLECTION</h3>
        <h1 className="hhh">DEALS & BUNDELS</h1>
        <div className="picsgrid">
          {picturesData2.slice(0, 8).map((picture) => (
            <Card Data={picture} />
          ))}
        </div>
      </div>
      <br/>
      <br/>
      <hr />

      <button className="yellowButton">VIEW ALL PRODUCTS</button>

     <div>
  <div className="gallarypics">
    {PicturesData3.map((picture) => (
      <>
      <div key={picture.id} className="gallery-item">
        <div className="image-container">
        <div className="h1bt">
          <h1 className="image-title">{picture.h1}</h1>
          <button style={{ backgroundColor: 'black', color: '#f0cf7c', width: '200px' ,height:'50px'}} className="view-button">VIEW PRODUCTS</button>
          </div>
          <img className="gallery-image" src={picture.imgae} alt={picture.imgae} />
          
          </div>
        
      </div>
      </>
    ))}
  </div>
</div>


      <div>
        <div className="aftre">
          {PicturesData4.map((picture) => (
            <p className="Aftergallarry">{Data?.h1}</p>
         
          ))}
          
        </div>
      </div>


<div className="picandpara">
<img className="" src={image12} />
  <div className="h1andpara">
  
  

  <h1 className="h12">NATURE</h1>
  <h1>OUR GUARANTEE</h1>
  
  
  <p>Our products are 99.5-100% natural. We always aim to have our products as natural as they can be, never compromising on quality and effectiveness of the product. Each product is infused with the elements of aroma, memory, place and beauty traditions from across the globe.</p>
  </div>
</div>
      <h3 className="mkh3">@mkcosmeticspakistan</h3>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div>
        <div className="picture-grid">
          {PicturesData5.slice(0, 8).map((picture) => (
            <div key={picture.id} className="picture-item">
              <img className="" src={picture.imgae} alt={picture.name} />

             <br/>
          
            </div>

            
          ))}
        </div>
      </div>
      <br/>
      <br/>
     <hr/>
    
      <Table />
    </>
  );
};

export default PicsApi;
