import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FaStar, FaCartPlus } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { GoPlus } from "react-icons/go";
import RatingStar from "./Components/RatingStar";
import Card from "./Components/Card";
import { Link } from "react-router-dom";
import { CartContext, useCart } from './CartContext';

// import  from "./Addtocartpage";

import image1 from "./assets/images/EW7A0860_600x.webp";
import image2 from "./assets/images/EW7A0861_600x.webp";
import image3 from "./assets/images/EW7A0863_600x.webp";
import image4 from "./assets/images/EW7A0864_600x.webp";
import Reviews from "./Api/clientReviews";
import Cardd from "./Components/Home/Crd2";

import Addbutton from "./Addbutton";
import Addtocartpage from "./Addtocartpage";
import Data from "./Api/data";
import { light } from "@mui/material/styles/createPalette";
// import { useCart } from './CartContext'





function Thirdpage() {
  const contextValue = useContext(CartContext);
  console.log(' contextValue' , contextValue)
  const { cart, addToCart } = useCart(); 
  let [searchParams, setSearchParams] = useSearchParams();
  const images = [image1, image2, image3, image4];
  const [products, setProducts] = useState([]);
  const [discountedPrice, setDiscountedPrice] = useState(0);
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    const discountedPrice = products.price * 0.5;
    setDiscountedPrice(discountedPrice);
  }, [products]);

  useEffect(() => {
    const name = searchParams.get("name");
    const Arr1 = Data.BestSelle.concat(Data.BndslsandDeals);
    const Arr2 = Arr1.concat(Data.SummerSale);
    const selectedProduct = Arr2.filter((item) => {
      return name.toLowerCase() === item.name.toLowerCase();
    });
    

    if (selectedProduct.length > 0) {
      setProducts(selectedProduct[0]);
    }
  }, [Data, searchParams]);

  useEffect(() => {
    console.log(products, "products");
  }, [products]);

  const picturesData1 = Data.BestSelle;
  

  
  return (
    <>
      {products && (
        <div className="serumdetail">
          <div className="grid-container">
            <div className="image-column">
              {products?.imgae?.map((images, index) => (
                <img
                  className="key"
                  key={index}
                  src={images}
                  alt={`Products ${index + 1}`}
                />
              ))}
            </div>

            <div className="data-column2">
              {products?.imgae?.map((image, index) => {
              return(
                <img key={index} src={image} alt={`Product ${index + 1}`} />
              )
            })}
            </div>

            <div className="data-column3">
              <h1 className="namee">{products?.name}</h1>
              <div className="rating">
                
                  <RatingStar rating={products?.rating} />
                
                <p className="reviews">{products?.reviews} Reviews</p>
              </div>

              <div className="price-parent">
                <p>Rs. {discountedPrice}</p>
                <s className="price">Rs. {products?.price}</s>
              </div>
              <Addbutton value={1} setQuantity={setQuantity} />
<Link to="/Cart">
<button className="yellowbutton" onClick={() => addToCart({...products,quantity})}>
                  <h1>Add to Cart . RS.{products?.price}</h1>
                </button>
              {/* <button className="yellowbutton">
                {" "}
                <h1>Add to Cart . RS.{products?.price}</h1>
              </button> */}
              </Link>
              <button className="cart">
                <FaCartPlus className="facart" /> BUY WITH CASH ON DELIVERY
              </button>

              <div>
                <p className="paragrapgh">
                  Vitamin C serum reduces dark spots, brightens skin, and fights
                  the signs of aging. Vitamin C helps produce collagen, which
                  keeps skin firm and reduces the appearance of wrinkles and
                  protects skin from sun damage and dark spots.
                </p>

                <h1 className="heading1">Ingredients</h1>
                <p>
                  Vitamin C, Lactic Acid, Chamomile Ext, Hyaluronic Acid. All
                  Ingredients used in this product comply with EU Standards.
                </p>

                <h1 className="heading1">Benefits</h1>
                <p>Get glowy, soft, and smoother skin within a few days.</p>
                <h2 className="heading1">
                  Synchronized Multi-Recovery Complex
                </h2>
                <p>
                  A great blend of multiple actives, the Multi-Action
                  <br /> Face Serum was developed with the purpose of solving
                  multiple
                  <br /> benefits including full facial hydration that helps
                  balance the skin's oil levels.
                  <br /> This serum also helps shrink pore size as well as
                  reduce fine lines.
                </p>
                <h1 className="heading1">Best Serum in Pakistan</h1>
                <p>
                  Proven effective for all skin-tones. This is the high <br />
                  performance face serum beautiful skin can’t live without.
                  <br />
                  Multi Action Night Repair Face Serum harnesses the <br />
                  restorative power of night to deliver visible renewal. It
                  works
                  <br /> night and day to help skin maximize its overall natural
                  rhythm of repair and protection.
                </p>
                <h1 className="heading1">Directions</h1>
                <p>
                  Can be applied twice a day (morning & night) Wash your face
                  and pat dry apply a small amount of serum to your
                  <br /> fingertips & rub it into face and neck Allow to dry.
                </p>
                <h1 className="heading1">Caution</h1>
                <p>
                  For external use only, Discontinue use if causes redness or
                  irritation.
                </p>
                <br />
                <br />
                <p>Store at Cool & Dry Place.</p>
                <div className="twpin">
                  <p>SHARE MORE INFORMATION </p>
                  <div>
                    <FaTwitter />
                    <FaPinterest />
                  </div>
                </div>

                <hr />
                <div className="arr">
                  <p>VIEW IMAGES </p>
                  <IoIosArrowForward />
                </div>
                <hr />
              </div>
            </div>
          </div>
          <div className="hrh2">
            <hr className="half-width-line" />
            <h2 className="font">
              OUR GURANTEE <GoPlus />
            </h2>
            <hr className="half-width-line" />
            <h2 className="font">
              SHIPPING & RETURNS <GoPlus />
            </h2>
            <hr className="half-width-line" />
            <h2 className="font">
              REVIEWS <GoPlus />
            </h2>
            <hr className="half-width-line" />
          </div>
          <hr />


          <h1>YOU MAY ALSO LIKE </h1>

          <div className="picsgrid">
            {picturesData1.slice(0, 4).map((picture) => (
              <Card Data={picture} />
            ))}
          </div>
          <p>{products?.Price}</p>
        </div>
      )}
      <h1>{Reviews?.date}</h1>
      <Cardd Reviews={Reviews} />
    </>
  );
}

export default Thirdpage;
