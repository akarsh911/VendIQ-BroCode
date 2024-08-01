import React from 'react';
import './CurrentCall.css';

const CurrentCall = (props) => {
  return (
    <div className='phone'>
      <div className='callerid'>
        <div className='info'>
          <i className='fas fa-user-circle'></i>
          <div>
            <h2>Akarsh</h2>
            <p>Mobile +91124698262</p>
          </div>
        </div>
        <div className='options'>
          <div className='controls'>
            <div className='control'>
              <i className='fas fa-microphone-slash'></i>
              <span>Mute</span>
            </div>
            <div className='control'>
              <i className='fas fa-pause'></i>
              <span>Hold</span>
            </div>
            <div className='control'>
              <i className='fas fa-phone-alt decline'></i>
              <span>Decline</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentCall;