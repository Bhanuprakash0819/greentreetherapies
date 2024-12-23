import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Therapy.css';


const therapy = [
    {
        name: 'Behavioural Therapy',
        description: 'Behavior therapy focuses on helping children modify negative behaviors and develop positive ones through structured and systematic techniques. The therapy is rooted in understanding the child’s behavior and its triggers. Therapists work with children to teach skills that improve communication, social interaction, self-regulation, and problem-solving. Behavior therapy is often used for children with autism, ADHD, and other developmental disorders.',
        image: require('./Assets/Behavior.jpeg')
    },
    {
        name: 'Early Intervention',
        description: 'Early intervention refers to services provided to young children (typically under the age of 3) to address developmental delays or disabilities. Early intervention aims to identify and treat concerns as early as possible, providing children with the necessary tools and strategies to thrive. It includes therapies like speech, occupational, and behavioral therapy to help children develop cognitive, physical, and social skills. Early intervention is crucial in improving long-term outcomes for children with developmental challenges.',
        image: require('./Assets/Early intervention.jpeg')
    },
    {
        name: 'Occupational Therapy',
        description: 'Occupational therapy (OT) helps children develop the skills they need to perform daily activities (also known as “occupations”). OT focuses on fine motor skills, hand-eye coordination, sensory processing, and self-care routines such as dressing, eating, and grooming. Children with developmental delays, sensory processing disorders, or physical disabilities benefit from OT to increase independence and engage fully in their daily lives.',
        image: require('./Assets/Occupational.jpeg')
    },
    {
        name: 'Physiotherapy',
        description: 'Physiotherapy (or physical therapy) helps children develop gross motor skills, improve balance, coordination, and strengthen muscles. This therapy is beneficial for children with physical disabilities, delays in movement development, or those recovering from injury. Physiotherapists work with children to improve mobility, posture, and movement efficiency, enabling them to participate in physical activities and daily routines more effectively.',
        image: require('./Assets/Physiotherapy.jpeg')
    },
    {
        name: 'Speech Therapy',
        description: 'Speech therapy is designed to help children with speech, language, and communication challenges. Speech therapists assess, diagnose, and treat various speech and language disorders, including difficulties with articulation, fluency, language comprehension, and social communication. Therapy may include exercises to improve pronunciation, vocabulary, sentence structure, and non-verbal communication. This is essential for children facing developmental delays or disorders like autism, apraxia, or hearing impairments.',
        image: require('./Assets/Speech.jpeg')
    }
];

const Therapy = () => {

    return (
        <div className='therapy-container'>
            <div className='heading'>
            <h2>Therapies provided at our centers</h2>
            <p>Welcome to our comprehensive list of therapies for children and adolescents with developmental issues. We are proud to offer all of the therapies mentioned below, each tailored to the unique needs of children. We strive to provide the best possible care and support to children and their families. With a team of highly trained and experienced professionals, we are confident that we can help your children reach their full potential</p>
            </div>
            <div className='therapy-list'>
                {therapy.map((therapy, index) => (
                    <div className='therapy-item' key={index}>
                        <div className='therapy-image'>
                            <img src={therapy.image} alt={`${therapy.name} illustration`} />
                        </div>
                        <div className='therapy-details'>
                            <h3>{therapy.name}</h3>
                            <p>{therapy.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Therapy;
