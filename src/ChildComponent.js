
import React, { useContext } from 'react';
import MyContext from './MyContext';

const ChildComponent = () => {
  const contextValue = useContext(MyContext);


  return <div>{contextValue}</div>;
};

export default ChildComponent;
