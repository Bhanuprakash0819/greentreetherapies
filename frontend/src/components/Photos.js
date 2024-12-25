import React, { useState } from 'react';
import './Photos.css';
import img1 from './Assets/img1.jpeg';
import img2 from './Assets/img2.jpeg';
import img3 from './Assets/img3.jpeg';
import img4 from './Assets/img4.jpeg';
import img5 from './Assets/img5.jpeg';

const Photos = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [img1, img2, img3, img4, img5];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="photos-container">
            <h1 className="photos-title">Photo Gallery</h1>
            <div className="photos-slider">
                <div
                    className="slider-wrapper"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Gallery Image ${index + 1}`}
                            className="slider-image"
                        />
                    ))}
                </div>
                <button className="nav-button prev-button" onClick={prevSlide}>
                    &#10094;
                </button>
                <button className="nav-button next-button" onClick={nextSlide}>
                    &#10095;
                </button>
            </div>
            <div className="slider-indicators">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`indicator ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Photos;
