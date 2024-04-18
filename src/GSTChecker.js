import React, { useState } from 'react';
import './GSTChecker.css';


const GSTChecker = () => {
  const [gstNumber, setGstNumber] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleInputChange = (e) => {
    setGstNumber(e.target.value);
  };

  const checkGST = () => {
    // GST validation logic can be implemented here
    // For simplicity, I'm checking if the input is not empty
    if (gstNumber.trim() !== '') {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  return (
    <div className="App">
    <div className="form-container">
    <form>
      <div>
        <label style={{ color:'#4c6cb9' , fontSize: '30px' }}>GST Checker</label><br/><br/>
        <hr></hr><br/><br/>
        
        <div id='div2' style={{ display: 'inline-flex', alignItems: 'center', gap:'40px' }}>
        <label htmlFor="gstInput">Enter GST Number</label>
        <input 
          type="text" 
          id="gstInput" 
          value={gstNumber} 
          onChange={handleInputChange} 
          style={{
            borderRadius: '3px', // Set border radius to 5px
            border: 'solid white 2px',
            width: '200px', // Set width to 200px
            height: '30px', // Set height to 40px
            backgroundColor: '#e8f0fd'
          }} 
        />
        
        </div><br/><br/><br/>
        <div id='div2' style={{ display: 'inline-flex', alignItems: 'center', gap:'60px' }}>
  <button
    onClick={checkGST}
    style={{
      borderRadius: '3px', // Set border radius to 3px
      border: 'solid white 2px',
      width: '100px', // Set width to 100px
      height: '30px', // Set height to 25px
      marginRight: '20px', // Add some right margin
      backgroundColor: '#4c6cb9',
      color:'white'
      
    }}
  >
    Check GST
  </button>
  {isValid ? (
    <label style={{ color: 'green' }}>Valid GST Number</label>
  ) : (
    <label style={{ color: 'red' }}>Invalid GST Number</label>
  )}
</div><br/><br/>

      </div>
    </form>
  </div>
      
      </div>
  );
};

export default GSTChecker;
