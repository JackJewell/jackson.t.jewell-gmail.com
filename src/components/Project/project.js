import React from "react";
import "./style.css"

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Project(props) {
  return (
      <div className="card project float-left">
        <div className="card-body p-0">
          <img className = "card-img-top" src="https://www.xzero.se/wp-content/uploads/bfi_thumb/xzero-posts-792x350-15-32jmh9vlytn75qicie1y25cz4qok3xazlkrftag4ktwo1pob8.jpg" alt="Card cap"/>
          <h5 className="card-title cardTitle">{props.name}</h5>
          <p className="card-text"></p>
          <a className = "btn btn-secondary cardBtn" href= {props.link} role = "button">Link</a>
          <a className = "btn btn-secondary cardBtn" href= {props.github} role = "button">Github</a>
        </div>
      </div>
  );
}



export default Project;