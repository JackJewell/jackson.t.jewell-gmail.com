import React from "react";
import Project from "../../components/Project";
import "./style.css";
import Hike from "./hike.PNG"
import War from "./warcamp.PNG"
import Notes from "./notes.PNG"

const Projects = () => {
  return (
    <div>
      <Project 
        className = "project"
        pic={Hike}
        name = "Take a Hike" 
        link = "https://jackjewell.github.io/TakeAHike/" 
        github = "https://github.com/JackJewell/TakeAHike"
        description = "My first project from Boot Camp, an API based site used to find camping locations given a location."
      />
      <Project 
        className = "project"
        pic={War}
        name = "War Camp" 
        link = "http://www.warcamp.net/" 
        github = "https://github.com/JackJewell/warcamp2"
        description = "My final project, a React site used for building lists for Crownbreaker, a medieval fantasy war game that I designed alongside the site."
      />
      <Project 
        className = "project"
        pic={Notes}
        name = "Note Taker" 
        link = "https://desolate-cliffs-30459.herokuapp.com/" 
        github = "https://github.com/JackJewell/NoteTaker"
        description = "An app built using Express, allows a user to take and save notes."
      />
    </div>
  );
};

export default Projects;