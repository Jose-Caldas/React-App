import "../styles/Cards.css";
export default function Cards({
  strong,
  small,
  span,
  h2,
  description,
  paragraph,
}) {
  return (
    <div className="cardsContainer">
      <header>
        <div className="cardsProfile">
          <h2>{h2}</h2>
          <strong>{strong}</strong>
        </div>
        <div className="cardsInfo">
          <small>{small}</small>
          <span>{span}</span>
        </div>
      </header>
      <div>
        <h3>{description}</h3>
        <p>{paragraph}</p>
      </div>
    </div>
  );
}
