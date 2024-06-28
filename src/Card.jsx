import "./Card.css";

const Card = ({ name, urlImage }) => {
  return (
    <div className="card">
      <img src={urlImage} alt="immagine di test" />
      <h1>Hello, {name}!</h1>
    </div>
  );
};

export default Card;
