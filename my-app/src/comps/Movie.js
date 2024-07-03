import React from 'react';

function Movie(props) {

  return (
    <div className="movie">
    <h1>{props.m.name}</h1>
    <img src={props.m.Image} alt=""/>
    <a href={props.m.link}>click here...</a>
    </div>
  );
}

export default Movie;
