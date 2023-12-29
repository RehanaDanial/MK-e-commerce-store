import React, { useState, useEffect } from 'react';

const Addbutton = ({setQuantity,value}) => {
  const [Addbutton, setAddbutton] = useState(1);

  const handleIncrement = () => {
    setAddbutton(Addbutton + 1);
  };

  const handleDecrement = () => {
    if (Addbutton > 1) {
      setAddbutton(Addbutton - 1);
    }
  };

  useEffect(()=>{
    setQuantity(Addbutton)
  },[Addbutton])

  useEffect(()=>{
    if(value > 1){
      setAddbutton(value)
    }else{
      setAddbutton(1)
    }
  },[value])

  return (
    <div className='incrementdecrement'>

      <button className='bn' onClick={handleDecrement}>-</button>
      <p className='zero'> {Addbutton}</p>
      <button className='bn' onClick={handleIncrement}>+</button>
      
    </div>
  );
};

export default Addbutton;





