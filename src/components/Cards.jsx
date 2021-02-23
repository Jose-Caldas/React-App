import Image from "./Ellipse 1.png";

export default function Cards() {
  return (
    <div className="cards">
      <header>
        <div class="card-header">
          <div>
            <img src={Image} alt="" srcset="" />
          </div>
          <strong>Ham Chuwon</strong>
        </div>
        <div class="card-left">
          <small>Today</small>
          <span>2</span>
        </div>
      </header>
      <p class="small-paragraph">Please review and sing the last Bin...</p>
      <p class="large-paragraph">
        Hello John, I would really like to see some examples of the previous
      </p>
    </div>
  );
}
