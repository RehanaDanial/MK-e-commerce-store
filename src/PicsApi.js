// PicsApi.js

import React, { useEffect } from 'react';
import Data from '../Api/data';
import image from '../assets/images/galleryImages/1';
import { Link } from 'react-router-dom';
import PictureSection from './PictureSection';
import Table from '../table';

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
      <div className='pic-button'>
        <Link to="/allProducts">
          <img className='pis' src={image} alt="Clickable Image" />
        </Link>
        <button className='btn'>SHOP NOW</button>
      </div>

      <div className='pictures-gallary'>
        <PictureSection title="SUMMER SALE OFFERING" pictures={picturesData} />
      </div>

      <hr />

      <div>
        <PictureSection title="BESTSELLERS" pictures={picturesData1} />
      </div>

      <hr />

      <div>
        <PictureSection title="DEALS & BUNDELS" pictures={picturesData2} />
      </div>

      <div className='gallarypics'>
        <PictureSection title="FEATURED COLLECTION" pictures={PicturesData3} />
      </div>

      <div className='aftre'>
        <PictureSection title="OUR GUARANTEE" pictures={PicturesData4} />
      </div>

      <h3>@mkcosmeticspakistan</h3>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div>
        <div className='picture-grid'>
          {PicturesData5.map((picture) => (
            <div key={picture.id} className="picture-item">
              <img className='' src={picture.imgae} alt={picture.name} />
              <hr />
            </div>
          ))}
          <Table />
        </div>
      </div>
    </>
  );
};

export default PicsApi;
