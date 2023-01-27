import React from 'react';
import logo from '../assets/icons8-mindfulness-78.png';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div className='bg-red-200 mb-5'>
      <div className='container'>
        {/* Logo */}
        <div className=''>
          <Link to='/' className='text-center'>
            <img className='h-8 w-8 mx-auto' src={logo} alt='' />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
