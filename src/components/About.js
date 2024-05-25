import React from 'react';
import './css/About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
      {/* <p>Hi, I'm Victoria Rossi, a passionate software engineer with a focus on developing user-centric web applications. My journey in computer science has equipped me with a solid foundation in various programming languages and frameworks, which I leverage to build innovative solutions.</p> */}
      
      <div className="skills">
        <h3>Skills</h3>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>HTML/CSS</li>
          <li>Python</li>
          <li>Java</li>
          <li>C++</li>
          <li>SQL</li>
          <li>Google Cloud</li>
        </ul>
      </div>
      
      <div className="experience">
        <h3>Experience</h3>
        <p>I worked as a Machine Learning Intern at the Illinois Department of Transportation from April 2024 to May 2024. During this time, I leveraged various LLMs (Llama3, Gemma, GPT, Claude, Mistral) to summarize and enhance weather reports, improving content clarity and accessibility on the TravelMidwest website for all drivers. 
            I also supported professor and grad TAs in Languages and Automata course at the University of Illinois at Chicago from January 2024 to May 2024. In this role, I assisted and explained topics such as regular languages, context-free grammars, and Turing machines during labs, held weekly office hours to help students solve problems independently.</p>
      </div>
      
      <div className="education">
        <h3>Education</h3>
        <p>I am currently pursuing a B.S. in Computer Science with a Software Engineering concentration at the University of Illinois at Chicago. I began my academic journey in Argentina and transferred to UIC to further my education.</p>
      </div>
      
      <div className="personal-interests">
        <h3>Personal Interests</h3>
        <p>In my free time, I enjoy hiking, reading tech blogs, and exploring new programming languages. I'm also a piano player and love to work on personal projects that challenge my coding skills.</p>
      </div>
    </section>
  );
};

export default About;
