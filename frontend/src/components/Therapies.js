import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Therapies.css';

const therapies = [
    {
        name: 'Behavioural Therapy',
        description: 'Behavioral therapy focuses on modifying harmful behaviors and enhancing positive actions.',
        image: require('./Assets/Behavior.jpeg')
    },
    {
        name: 'Speech Therapy',
        description: 'Speech therapy helps improve communication and language skills.',
        image: require('./Assets/Speech.jpeg')
    },
    {
        name: 'Occupational Therapy',
        description: 'Occupational therapy aids in improving daily living and work skills.',
        image: require('./Assets/Occupational.jpeg')
    },
    {
        name: 'Early Intervention',
        description: 'Early intervention helps address developmental delays in children at an early stage.',
        image: require('./Assets/Early intervention.jpeg')
    },
    {
        name: 'Physiotherapy',
        description: 'Physiotherapy enhances physical movement and alleviates pain.',
        image: require('./Assets/Physiotherapy.jpeg')
    }
];

const Therapies = () => {
    const navigate = useNavigate();

    const handleSelectTherapy = (therapy) => {
        navigate('/booking', { state: { therapy } });
    };

    return (
        <div className='therapy-containers'>
            <h2>Select a Therapy</h2>
            <div className='therapy-li'>
                {therapies.map((therapy, index) => (
                    <div className='therapy-items' key={index}>
                        <div className='therapy-img'>
                            <img src={therapy.image} alt={`${therapy.name} illustration`} />
                        </div>
                        <div className='therapy-detail'>
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
