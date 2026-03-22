import React from 'react';
import './ShapeLandingHero.css'; // Make sure to create this CSS file for styling

const ShapeLandingHero = () => {
    return (
        <div className='fullscreen-hero'>
            <div className='hero-content'>
                <h1 className='hero-title'>Explore <span className='gradient-text'>the Future</span></h1>
                <p className='hero-description'>Join us on a journey to transform your dreams into reality with our innovative solutions.</p>
                <div className='cta-buttons'>
                    <button className='cta-button'>Get Started</button>
                    <button className='cta-button secondary'>Learn More</button>
                </div>
            </div>
            <div className='animated-badge'>🚀</div>
            <div className='decorative-shapes'>
                {/* Decorative shapes can be added here */}
            </div>
        </div>
    );
};

export default ShapeLandingHero;
