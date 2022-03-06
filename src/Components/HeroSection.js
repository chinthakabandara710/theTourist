import React, { useState } from 'react';
import { Button } from './Button';
import '../App.css';
import './HeroSection.css';
import introVideo from '../videos/video-4.mp4';

function HeroSection() {
    setInterval(updateTime, 1000);

    const now = new Date().toLocaleTimeString('en-GB');

    const [time, setTime] = useState(now);

    function updateTime() {
        let newTime = new Date().toLocaleTimeString('en-GB');
        setTime(newTime)
    }

    // console.log(time);
    return (
        <div className='hero-container'>
            <video src={introVideo} autoPlay loop muted ></video>
            <h1>MAKE YOUR VACATION COMFORTABLE</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
            <div className='hero-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    Need A Reservation ?
                </Button>

            </div>
            <h5 className='hero-time' onClick={updateTime}>{time}</h5>

            <div className='notification'><i class="fas fa-bell"></i></div>

        </div>
    )
}

export default HeroSection;

