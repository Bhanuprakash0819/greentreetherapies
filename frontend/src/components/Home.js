import React, { useState } from 'react';
import greentree from './Assets/greentree.jpg';
import therapy1 from './Assets/therapy1.jpeg';
import therapy2 from './Assets/therapy2.jpeg';
import therapy3 from './Assets/therapy3.jpeg';
import therapy4 from './Assets/therapy4.jpeg';
import therapy5 from './Assets/therapy5.jpeg';
import therapy6 from './Assets/therapy6.jpeg';
import therapy7 from './Assets/therapy7.jpeg';
import therapy8 from './Assets/therapy8.jpeg';
import therapy9 from './Assets/therapy9.jpeg';
import therapy10 from './Assets/therapy10.jpeg';
import therapy11 from './Assets/therapy11.jpeg';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    { id: 1, title: 'Multidisciplinary Approach', image: therapy1, info: 'We bring together a team of specialists, including speech therapists, occupational therapists, psychologists, and educators, to design and implement integrated care plans. This collaborative approach ensures a comprehensive focus on all areas of a child’s development.' },
    { id: 2, title: 'Play-Based Learning', image: therapy2, info: 'We emphasize the power of play as a natural medium for children to learn and grow. Through engaging activities, we promote cognitive, social, and emotional skills while making learning enjoyable and meaningful.' },
    { id: 3, title: 'Family-Centered Approach', image: therapy3, info: 'Parents and caregivers play a vital role in a child’s development. Our programs actively involve families through training, home-based strategies, and consistent communication to support continued progress at home.' },
    { id: 4, title: 'Sensory Integration Therapy', image: therapy4, info: 'For children facing challenges in processing sensory inputs, we offer targeted activities that enhance their ability to respond to sensory stimuli. This approach improves focus, self-regulation, and motor skills.' },
    { id: 5, title: 'Behavior Management', image: therapy5, info: 'Using evidence-based techniques like positive reinforcement and Applied Behavior Analysis (ABA), we support children in managing behaviors, building social skills, and developing independence.' },
    { id: 6, title: 'Early Intervention', image: therapy6, info: 'Early identification and intervention are key to addressing developmental delays. Our team works to identify potential challenges and provides specialized support to maximize each child’s potential during critical developmental periods.' },
    { id: 7, title: 'Inclusive Practices', image: therapy7, info: 'We embrace an inclusive environment where children of all abilities learn and grow together. Our programs are tailored to ensure that every child feels valued, supported, and engaged.' },
    { id: 8, title: 'Strength-Based Approach', image: therapy8, info: 'We focus on identifying and building upon each child’s strengths and interests to enhance their confidence and motivation. Every child’s achievements, no matter how small, are celebrated as milestones in their journey.' },
    { id: 9, title: 'Social-Emotional Learning', image: therapy9, info: 'Our programs are designed to help children understand and express their emotions, develop empathy, and build strong relationships. Activities like group games, role-playing, and storytelling encourage emotional growth and social skills.' },
    { id: 10, title: 'Life Skills Training', image: therapy10, info: 'We prepare children for real-world success by teaching practical skills such as personal hygiene, communication, and problem-solving. These essential life skills are integrated into our programs to promote independence and self-sufficiency.' },
    { id: 11, title: 'Cognitive Development Support', image: therapy11, info: 'Through structured activities like puzzles, storytelling, and games, we encourage the development of memory, attention, and problem-solving abilities, fostering readiness for school and lifelong learning.' },
  
    // More therapies...
  ];
  const therapy = [
    {title:'Behavioural Therapy', info: 'Behavior therapy focuses on helping children modify negative behaviors and develop positive ones through structured and systematic techniques. The therapy is rooted in understanding the child’s behavior and its triggers. Therapists work with children to teach skills that improve communication, social interaction, self-regulation, and problem-solving. Behavior therapy is often used for children with autism, ADHD, and other developmental disorders.'},
    {title:'Early Intervention', info: 'Early intervention refers to services provided to young children (typically under the age of 3) to address developmental delays or disabilities. Early intervention aims to identify and treat concerns as early as possible, providing children with the necessary tools and strategies to thrive. It includes therapies like speech, occupational, and behavioral therapy to help children develop cognitive, physical, and social skills. Early intervention is crucial in improving long-term outcomes for children with developmental challenges.'},
    {title:'Occupational Therapy', info: 'Occupational therapy (OT) helps children develop the skills they need to perform daily activities (also known as “occupations”). OT focuses on fine motor skills, hand-eye coordination, sensory processing, and self-care routines such as dressing, eating, and grooming. Children with developmental delays, sensory processing disorders, or physical disabilities benefit from OT to increase independence and engage fully in their daily lives.'},
    {title:'Physiotherapy', info: 'Physiotherapy (or physical therapy) helps children develop gross motor skills, improve balance, coordination, and strengthen muscles. This therapy is beneficial for children with physical disabilities, delays in movement development, or those recovering from injury. Physiotherapists work with children to improve mobility, posture, and movement efficiency, enabling them to participate in physical activities and daily routines more effectively.'},
    {title:'Speech Therapy', info: 'Speech therapy is designed to help children with speech, language, and communication challenges. Speech therapists assess, diagnose, and treat various speech and language disorders, including difficulties with articulation, fluency, language comprehension, and social communication. Therapy may include exercises to improve pronunciation, vocabulary, sentence structure, and non-verbal communication. This is essential for children facing developmental delays or disorders like autism, apraxia, or hearing impairments.'}
  ]

  return (
    <div className='body'>
      {/* Navbar with "What is Greentree Therapies" */}
      <div className="therapies">
        <div className="therapies-left">
        <ul className="therapies-list">
      <li>
        <Link to="/therapy" className="therapies-link">Therapies</Link>
      </li>
      <li>
        <Link to="/photos" className="therapies-link">Photos</Link>
      </li>
      <li>
        <Link to="/aboutus" className="therapies-link">About Us</Link>
      </li>
    </ul>
          <h2 className="therapies-heading">What is Green Tree Therapies?</h2>
          <p className="therapies-paragraph">
            Green Tree Therapies is a holistic center dedicated to enhancing the physical, emotional, and social well-being of children and adults. 
            Our programs combine evidence-based practices and innovative approaches to help individuals reach their full potential.
          </p>
        </div>
        <div className="therapies-right">
          <img src={greentree} alt="Greentree" className="greentree-image" />
        </div>
      </div>
     
      {/* Main Content */}
      <h1 className="main-heading">Welcome to Our Therapy Center</h1>
      <p className="main-paragraph">
        Discover a variety of therapies designed to enhance your physical and mental well-being.
      </p>

      {/* Therapy Sections */}
      <div className="therapy-sections">
        {sections.map((section) => (
          <div
            key={section.id}
            className="therapy-card"
            onClick={() => setActiveSection(activeSection === section.id ? null : section.id)}
          >
            <img src={section.image} alt={section.title} className="therapy-image" />
            <h2 className="therapy-title">{section.title}</h2>
            {activeSection === section.id && (
              <p className="therapy-info">{section.info}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
