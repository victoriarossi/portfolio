import React from 'react';
import './css/Home.css';
import profilePicture from './img/pic.JPG'; // Add your profile picture here

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="hero">
        <img src={profilePicture} alt="Victoria Rossi" className="profile-picture" />
        <h1>Victoria Rossi</h1>
        <h2>Web Developer</h2>
        <p>Hi, I'm Victoria. I'm a software engineer with a passion for creating dynamic and user-friendly web applications. With a strong background in computer science and hands-on experience in software development, I specialize in building solutions that enhance user experiences and improve accessibility.</p>
        <p>I am deeply passionate about Machine Learning and Artificial Intelligence. I'm fascinated by their potential to revolutionize industries and solve complex problems, I am driven to explore their applications and contribute to advancements in this field.</p>
        <button onClick={() => window.location.href = '#projects'}>View My Projects</button>
      </div>
    </section>
  );
};

export default Home;
