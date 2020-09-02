import React from 'react';

import star from '../../assets/images/star.svg';
import wars from '../../assets/images/wars.svg';

const Logo = ({ isHomepage }) => {

  return (
    <>
      <img src={star} alt="Star" className={isHomepage ? 'starheader' : 'star'} />
      <img src={wars} alt="Wars" className={isHomepage ? 'warsheader' : 'wars'} />
    </>
  )
}

export default Logo;