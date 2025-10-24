import React from 'react';
import './css/Home.css';
import profilePicture from './img/pic.JPG'; // Add your profile picture here

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="hero">
        <img src={profilePicture} alt="Victoria Rossi" className="profile-picture" />
        <h1>Victoria Rossi</h1>
        <h2>Computer Science</h2>
        <p>Hi, I'm Victoria. I'm a researcher in Natural Language Processing with a focus on cross-lingual understanding and empathy detection in Spanish. My work explores how large language models interpret and generate language across cultures, aiming to improve fairness, accessibility, and sensitivity in AI systems.</p>
        <p>Currently, I am conducting research on Spanish empathy datasets, analyzing how accurate is sentiment classification when we train LLMs with annotated datasets. I am especially interested in bridging the gap between multilingual language technologies and real-world applications, advancing the ability of NLP systems to support diverse users and contexts.</p>
        <div className="home-buttons">
        <button onClick={() => window.location.href = '#projects'}>View My Projects</button>
        <a href="/Victoria_Rossi_CV.pdf" target="_blank" rel="noopener noreferrer">
          <button>View My CV</button>
        </a>
        <button onClick={() => window.location.href = '#lectures'}>View My Lectures</button>
        </div>
      </div>
    </section>
  );
};

export default Home;
