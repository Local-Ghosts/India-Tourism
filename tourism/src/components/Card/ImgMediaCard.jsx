import React from 'react'
import "./card.css" 

function ImgMediaCard(props) {
  const styles = {
    backgroundColor:"orange", 
    background: "linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url('" + props.item.img + "')", 
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center"
  };
  return (
    <div className="card" style={styles}>
      <div className="about-text">
        <h1>{props.item.place}</h1>
        <p>{props.item.description}</p>
    </div>
  </div>
  ) 
}


export default ImgMediaCard