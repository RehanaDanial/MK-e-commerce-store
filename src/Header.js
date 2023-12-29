
import React from 'react';
import { CiSearch } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { IoBagOutline, IoOptions } from "react-icons/io5";
import { FiAlignJustify } from "react-icons/fi";
import { alignProperty } from '@mui/material/styles/cssUtils';
import ThreeLineSelectButton from './Threelinesselect.js';
// import  Image1  from './my-newapp/src/assets/images/1.jpg'

const Header = () => {
  return (
    <>
    <div className='head'>
    <div className='top-bar'>FREE DILIEVERY ALL OVER PAKISTAN</div>
    <div className='after-top'>

<div className='iconss'>
  <dive className='threelines'>
    {/* <ThreeLineSelectButton/> */}
    
{/* <FiAlignJustify  /> */}
{/* <buttton onclick=''><FiAlignJustify  /></buttton> */}

{/* <ThreeLineSelect/> */}

</dive>

<img className='svg' src='hello.png'></img>
<div className='icon'>
<GoPerson />
<IoBagOutline />
<CiSearch />
</div>

</div>
    
       

       
    </div>
    <header>
      <nav>
        <ul className='list'>
          <li><a href="/">BLESSED FRIDAY SALE</a></li>
          <li><a href="/products">BUNDLES & DEALS</a></li>
          <li><a href="/about">SHOP ALL</a></li>
        
        </ul>
      </nav>
    
    </header>
    <img src=''></img>
    </div>
    </>

  );
};

export default Header;
