import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Therapies.css';

const therapies = [
    {
        name: 'AUTISM Therapy',
        description: 'A specialized therapy to support individuals with Autism Spectrum Disorder.',
        image: 'path/to/autism-image.jpg'
    },
    {
        name: 'ABA Therapy',
        description: 'Applied Behavior Analysis therapy focuses on improving specific behaviors.',
        image: 'path/to/aba-image.jpg'
    },
    {
        name: 'Behavioural Therapy',
        description: 'Helps in identifying and changing potentially self-destructive behaviors.',
        image: 'path/to/behavioral-image.jpg'
    },
    {
        name: 'Speech Therapy',
        description: 'Aims to improve communication skills through speech and language techniques.',
        image: 'path/to/speech-image.jpg'
    },
    {
        name: 'Occupational Therapy',
        description: 'Supports individuals in developing skills for daily living and working.',
        image: 'path/to/occupational-image.jpg'
    }
];

const Therapies = () => {
    const navigate = useNavigate();

    const handleSelectTherapy = (therapy) => {
        navigate('/booking', { state: { therapy } });
    };

    return (
        <div className='therapy-container'>
            <h2>Select a Therapy</h2>
            <div className='therapy-list'>
                {therapies.map((therapy, index) => (
                    <div className='therapy-item' key={index}>
                        <div className='therapy-image'>
                            <img src={therapy.image} alt={`${therapy.name} illustration`} />
                        </div>
                        <div className='therapy-details'>
                            <h3>{therapy.name}</h3>
                            <p>{therapy.description}</p>
                            <button onClick={() => handleSelectTherapy(therapy.name)}>
                                Select
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Therapies;
