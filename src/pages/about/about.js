import React from "react";
import "./style.css";

const About = () => {
  return (
    <div id = "aboutDiv">
      <h2>
        About me
      </h2>
      <hr></hr>
      <p>
          Hello there! My name is Jackson Jewell, and this is my portfolio. I am seeking employment as a Website Developer. Professionally
          I'm interesting in coding and software development as I love computers and have a passion for building and creating all kinds of things.
          I am currently working towards obtaining a certificate in Full Stack Web Development from Vanderbilt University, and will be graduating from
          the program in mid-April.
      </p>
      <p>
          Outside of work or school I'm a massive nerd, particularly when it comes to fantasy, science fiction, and writing. 
          I have several major ongoing fantasy writing projects, the foremost  of which is the development of my own world,
          Caracklyst. I also have a novel in the works set in my world, and if you'd ever like to chat about it I'll talk
          your ears off. In addition to this I'm an avid tabletop gamer. I primarily play Warhammer 40,000 and 
          Dungeons & Dragons.
      </p>
      <p>
          I'll likely update this site with lots of cool stuff over the next few months, so be sure to check back in soon!
      </p>
      <a className = "btn btn-secondary aboutButton" href = "https://github.com/JackJewell" role="button" >Github Profile</a>
      <a className = "btn btn-secondary aboutButton" href = "https://www.linkedin.com/in/jack-jewell-048006141/" role="button" >LinkedIn Profile</a>
      <a className = "btn btn-secondary aboutButton" href = "https://docs.google.com/document/d/1QCSpn3TluEkaSQH695mjI6Oiwr9UopJA29oD0ZkkJPQ/edit?usp=sharing" role="button" >Resume</a>
    </div>        
  );
};

export default About;