import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";



const  Table=()=>{

    return(
<>
<div className="tablee">
<hr/>
<table>
  <tr>
    <th>ABOUT THE SHOP</th>
    <th>SHOP</th>
    <th>ABOUT</th>
    <th>NEWSLETTER</th>
  </tr>
  <tr>
    <td>We lovingly create products that will complement and <br/>enhance the daily self-care ritual.</td>
    <td>BUNDLES & DEALS</td>
    <td>Privacy Policy</td>
    <td>Subscribe to receive updates, access <br/>to exclusive deals, and more.</td>
  </tr>
  <tr>
    <td className="cc">Contact No: 0304-1110655</td>
    <td>Face</td>
<td>Terms of Service</td>
<td></td>




  </tr>
  <tr>
    <td>WhatsApp No: 0301 1124600</td>
    <td>Body</td>
    <td>Affiliat Program</td>
    <td><from className="form" in>Enter Your Email </from></td>
  </tr>
  <tr>
    <td>Email: Malaikakhancosmetics@gmail.com</td>
    <td>Lips</td>
    <td>Refund Policy</td>
  
    <td>  
  <button className="subscribe"> SUBSCRIBE</button>
</td>
    
  </tr>
  <tr>
    <td>Instagram: mkcosmeticspakistan</td>
  </tr>
  <tr><td>Facebook: mkcosmeticspakistan</td></tr>

  <tr><td className="lst">For More Updates & Reviews Follow Us</td></tr>
</table>
<div className="search-insta">
<tr>
  <td className="search-insta">  <FaSearch /></td>
</tr>
<tr>
  <td className="search-insta"><FaInstagram /></td>
  </tr>
</div>


<table className="mkcos">
<tr>
  <td className="mk">© MK COSMETICS PAKISTAN</td>

  </tr>
<tr>
  <td className="mkcs">Powered by Shopify</td>
  </tr>
</table>

</div>

</>
    )
}
export default Table;