import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Gallery from '../Gallery';
import HeroSection from '../HeroSection';

function Home() {
    return (
        <>
            <HeroSection />
            <Cards />
            <Gallery />
        </>
    )
}

export default Home;

