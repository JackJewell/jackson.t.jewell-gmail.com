import React from "react";
import "./style.css"

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Project(props) {
  return (
      <div className="card project float-left">
        <img className = "card-img-top" src={props.pic} alt="Card cap"/>
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <h6>Description:</h6>
          <hr></hr>
          <p className="card-text">{props.description}</p>
          <a className = "btn btn-secondary cardBtn" href= {props.link} role = "button">Link</a>
          <a className = "btn btn-secondary cardBtn" href= {props.github} role = "button">Github</a>
        </div>
      </div>
  );
}



export default Project;