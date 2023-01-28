import React from 'react';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div className='bg-red-200 mb-5'>
      <div className='container'>
        {/* Logo */}
        <div className=''>
          <Link to='/' className='text-center'>
            <img className='h-8 w-8 mx-auto' alt='' />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
