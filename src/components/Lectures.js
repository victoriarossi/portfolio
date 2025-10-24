import React from 'react';
import LectureCard from './LectureCard';
import './css/Lectures.css';

const lecturesData = [
  { title: 'Introduction to Go', description: 'UIC, Fall 2025', link: 'https://drive.google.com/file/d/1CfG2TFcymHXqnFKac0OWg2USr987yS3T/view?usp=sharing' },
  { title: 'Chomsky Normal Form I', description: 'UIC, Spring 2025', link: 'https://drive.google.com/file/d/1gHpQBKbpfLsoANwqjGFe5ZZ2oc9lcUf6/view?usp=sharing' },
  { title: 'Chomsky Normal Form II', description: 'UIC, Spring 2025', link: 'https://drive.google.com/file/d/1SnnjB4YNC39rLbWfcF5cEwCilrXMNWrJ/view?usp=sharing' },
  { title: 'Recursion — CS 107', description: 'UIC, Fall 2024', link: 'https://drive.google.com/file/d/17VO4as3bysAcsUJMoSjQMXRHGHRcE2Tg/view?usp=sharing' },
  { title: 'Introduction to OOP', description: 'UIC, Fall 2024', link: 'https://drive.google.com/file/d/1-FwLCK0gvEIUEzV8bbk_2V_z_ZZ0IW1Z/view?usp=sharing' }
];

const Lectures = () => {
  return (
    <section id="lectures" className="projects-section">
      <h2>Lectures</h2>
      <div className="lectures-grid">
        {lecturesData.map((lec, i) => (
          <LectureCard key={i} title={lec.title} description={lec.description} link={lec.link} />
        ))}
      </div>
    </section>
  );
};

export default Lectures;
