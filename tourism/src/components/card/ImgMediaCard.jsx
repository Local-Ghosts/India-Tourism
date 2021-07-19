import "./card.css"

export default function ImgMediaCard(props) {

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
        <h2>{props.item.place}</h2>
        <p>{props.item.description}</p>
    </div>
  </div>
  ) 
}