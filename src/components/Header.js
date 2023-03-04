import React from 'react';

import Logo from '../assets/logoS.png';

const Header = () => {
  return <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
          <img 
            width="200" 
            height="250"
            src={Logo} alt='Logo' />
          <button className='btn btn-sm'>Me acompanhe!</button>
      </div>
    </div>
  </header>;
};

export default Header;
