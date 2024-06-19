import React from 'react';
import ContentPage from '../components/ContentPage';
import div from './Pages.css';
import style from './Pages.css';
const About = () => {
  return (
    <div classname={div} style={{textAlign:'center'}}>
      <header>
        <h1>About</h1>
      </header>
      <main>
        <p>Welcome to my simple React home page! This is a basic example of a React project.</p>
        <img src="https://img.freepik.com/free-photo/dragons-fantasy-artificial-intelligence-image_23-2150400884.jpg" alt="Placeholder" />
      </main>
    </div>
  );
}

export default About;