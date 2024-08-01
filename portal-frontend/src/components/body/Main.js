import React, { useState, useEffect, useRef } from 'react';
import './Main.css';
import Left from '../body/left/Main';
import Right from '../body/right/Main';
import Middle from '../body/middle/Main';




function Body() {
  const [sharedData, setSharedData] = useState({
    gemini: {
      generated_content: '** Hello, how can I help you today? ** ',
    },
    sentiment: {
      sarcasm_detection:"YES",
      sentiment:"POSITIVE",
    },
  });
  const updateSharedData = (data) => {
    console.log(data.gemini);
    setSharedData(data);
  };
  return (
    <div className='main-body'>
      <Left updateSharedData={updateSharedData}/>
      <Middle recieveData={sharedData.gemini}/>
      <Right recieveData={sharedData.sentiment}/>
    </div>
  );
}

export default Body;
