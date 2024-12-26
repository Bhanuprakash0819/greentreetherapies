import React from 'react';
import './AboutUs.css';
import greentree from './Assets/greentree.jpg'
const AboutUs=()=>{
    return (
        <div className='about-container'>
        <div className='green-img'>
           <img src={greentree} alt="Greentree" className="greentree-image" />
        </div>
        <div className='para'>
            <p>
            Welcome to Green Tree Therapies Child Development Centre, a nurturing space dedicated to empowering children to reach their full potential. Our mission is to provide comprehensive support tailored to the unique needs of each child, fostering growth in physical, emotional, cognitive, and social development.
            </p>
            <p>
            At Green Tree Therapies, we believe that every child is unique and deserves an environment where they can thrive. With a team of highly skilled professionals specializing in occupational therapy, speech therapy, behavioral therapy, and early intervention programs, we create customized plans to address developmental milestones, learning challenges, and individual goals.
            </p>
            <p>
            Our holistic approach integrates evidence-based practices with creative, child-centered methods. Whether through play, sensory activities, or skill-building exercises, we ensure that every session is both engaging and effective.
            </p>
            <p>
            Located in a welcoming and inclusive space, our centre is equipped with state-of-the-art facilities to support a wide range of therapies. We also actively involve families, offering guidance and resources to ensure that progress continues at home.
            </p>
            <p>
            At Green Tree Therapies, we are committed to celebrating each child’s journey, helping them grow into confident, capable individuals. Together, let’s plant the seeds for a brighter tomorrow!
            </p>
        </div>
        </div>
    );
};

export default AboutUs;