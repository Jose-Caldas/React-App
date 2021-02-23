import "../styles/Global.css";
export default function Main() {
  return (
    <div className="main">
      <header>
        <h1>Please review and sign the binding agreement</h1>
      </header>
      <div className="main-header">
        <div class="avatar"></div>
        <div className="about">
          <div className="name">
            <strong>Ariana Barros</strong>
            <small style={{ marginLeft: "10px" }}>
              arianabarros@ecwcmovers.com
            </small>
          </div>
          <div>
            <small>Today, 2:45pm</small>
          </div>
        </div>
      </div>
      <p className="small-paragraph" style={{ marginTop: "49px" }}>
        I am sending you the lates binding agreements as agreed. You can take a
        look at our preliminary offer for your move by clicking this Link.
      </p>
      <p className="small-paragraph">
        I was thinking something related to this
      </p>
      <p className="small-paragraph" style={{ marginTop: "28px" }}>
        I am sending you the lates binding agreements as agreed. You can take a
        look at our preliminary offer for your move by clicking this Link.
      </p>
      <p className="small-paragraph" style={{ marginTop: "27px" }}>
        have a nice day,
      </p>
      <p className="small-paragraph" style={{ marginBottom: "58px" }}>
        Ariana Barros
      </p>
      <div className="main-footer">
        <small>1 Attachment</small>
        <small>Billing Agreement.pdf</small>
      </div>
    </div>
  );
}
