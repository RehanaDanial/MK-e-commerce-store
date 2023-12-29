import React, { useState } from 'react';
import { FiAlignJustify } from "react-icons/fi";

const ThreeLineSelectButton = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleButtonClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowDropdown(false);
  };

  return (
    <div className='dottedarea'>
      <button className='threedot' onClick={handleButtonClick}>
        {selectedOption ? selectedOption : <FiAlignJustify  />}
        
      </button>

      {showDropdown && (
        <div className="dropdown">
          <div onClick={() => handleOptionSelect('Option 1')}>serums</div>
          <div onClick={() => handleOptionSelect('Option 2')}>creams</div>
          <div onClick={() => handleOptionSelect('Option 3')}>skin care</div>
          <div onClick={() => handleOptionSelect('Option 3')}>hair care</div>
          <div onClick={() => handleOptionSelect('Option 3')}>oil control</div>
        </div>
      )}
    </div>
  );
};

export default ThreeLineSelectButton;
