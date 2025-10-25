import React from 'react';
import LectureCard from './LectureCard';
import './css/Lectures.css';

const lecturesData = [
  { title: 'Introduction to Go', description: 'UIC, Fall 2025', link: 'https://drive.google.com/file/d/1Xmo-dHyV2Ooj0Q_0_MhPtftMcRXmFvgl/view?usp=sharing' },
  { title: 'Chomsky Normal Form I', description: 'UIC, Spring 2025', link: 'https://drive.google.com/file/d/1r1Roj-ypGeZpI3VbkRow6XfsBSK2YZz3/view?usp=sharing' },
  { title: 'Chomsky Normal Form II', description: 'UIC, Spring 2025', link: 'https://drive.google.com/file/d/1SnnjB4YNC39rLbWfcF5cEwCilrXMNWrJ/view?usp=sharing' },
  { title: 'Recursion — CS 107', description: 'UIC, Fall 2024', link: 'https://drive.google.com/file/d/1YV3TqUXTrXo0OROdfFGe433zEkdvV9q5/view?usp=sharing' },
  { title: 'Introduction to OOP', description: 'UIC, Fall 2024', link: 'https://drive.google.com/file/d/1oCNy3NzqW9YX_2Z0XOBWTAq2XD5fjkwc/view?usp=sharing' }
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
