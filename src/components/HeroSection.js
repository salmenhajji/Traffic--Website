import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      // eslint-disable-next-line jsx-a11y/alt-text
      // eslint-disable-next-line jsx-a11y/alt-text
      <img src='/images/tunis.jpg' autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p></p>
      <p>Are you a new citizen in the capital?</p>
      <p>Do you want to use public transport?</p>
      <h2>This website is designed for you to provide you with all the necessary information about the public transport of all four cities of the Tunisian capital. Tunis.</h2>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
