import React from 'react';
import './Header.css';
import usericon from '../Assets/Vector/Vector.png'
import bellicon from '../Assets/Group 2/Group 2.png'

function Header() {
  return (
    <div className="header">
      
      <div className="client-info">

        <div className='client'>Client: GD Goenka</div>
        
        <div className='bell'><img alt='bellicon' src={bellicon}></img></div>
        
        <div className='username'>
          <div className='uicon'><img alt='usericon' src={usericon}></img></div>
          <div className='uname'>Hello, Sumit</div>
        </div>
      </div>
    </div>
  );
}

export default Header;