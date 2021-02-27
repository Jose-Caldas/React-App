import {
  FiCornerUpLeft,
  FiFileText,
  FiMoreHorizontal,
  FiPaperclip,
  FiStar,
} from "react-icons/fi";
import "../styles/Main.css";
import Ellipse7 from "./Ellipse 7.png";

export default function Main() {
  return (
    <div>
      <div className="mainContainer">
        <h1>Please review and sign the binding agreement</h1>

        <header className="mainHeader">
          <img src={Ellipse7} alt="" srcset="" />
          <div className="profile-info">
            <div className="profile">
              <strong>Ariana Barros</strong>
              <small>arianabarros@ecwcmovers.com</small>
            </div>
            <div className="info">
              <small>Today, 2:45pm</small>
              <FiStar />
              <FiCornerUpLeft />
              <FiMoreHorizontal />
            </div>
          </div>
        </header>
        <div className="paragraph">
          <p>
            I am sending you the lates binding agreements as agreed. You can
            take a look at our preliminary offer for your move by clicking this
            Link.
            <br></br> I was thinking something related to this
          </p>
          <p>
            I am sending you the lates binding agreements as agreed. You can
            take a look at our preliminary offer for your move by clicking this
            Link.
          </p>
          <p>
            have a nice day,
            <br />
            Ariana Barros
          </p>
          <p>
            <span>
              <FiPaperclip />1 Attachment <br />
            </span>
            <span>
              <FiFileText />
              Billing Agreement.pdf
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
