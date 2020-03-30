import React from "react";
import Project from "../components/Project"

const Projects = () => {
  return (
    <div>
      <Project name = "Take a Hike" link = "https://jackjewell.github.io/TakeAHike/" github = "https://github.com/JackJewell/TakeAHike"/>
      <Project name = "War Camp" link = "https://jackjewell.github.io/WarCamp/" github = "https://github.com/JackJewell/WarCamp"/>
      <Project name = "Note Taker" link = "https://mysterious-peak-79701.herokuapp.com/" github = "https://github.com/JackJewell/NoteTaker"/>
    </div>
  );
};

export default Projects;