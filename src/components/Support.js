import React from 'react';
import '../styles/Support.scss';

const Support = () => {

  return (
    <section className='support'>
      <img
        className='logo'
        src='https://iotechnologies.com/icons/IO-Technologies.svg'
        alt='logo'
      >
      </img>
      <p className='support__text'>
        Get how-to help and instructions or specific featires in
      </p>
      <div>
        <button className='support__button'>help center</button>
        <span className='support__text support__text--or'>or</span>
        <button className='support__button'>support</button>
      </div>
    </section>
  )
}

export default Support
