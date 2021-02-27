import "../styles/AsideRight.css";
import image from "../components/Ellipse 8.png";
import image9 from "../components/Ellipse 9.png";
import {
  FiAlignLeft,
  FiArrowDown,
  FiArrowUp,
  FiChevronRight,
  FiMoreHorizontal,
} from "react-icons/fi";

export default function AsideRight() {
  return (
    <div className="asideRightContainer">
      <header>
        <small>Lead Details</small>
        <small>Pending signature</small>
      </header>
      <div className="asideRightProfile">
        <img src={image} alt="" srcset="" />
        <strong>Ham Chuwn</strong>
        <p>#224 - Airpark Industrial</p>
      </div>
      <div className="asideRightInfo">
        <div className="right-info">
          <div>
            <h2>420 CF</h2>
            <p>Move Size</p>
          </div>
          <div>
            <h2>$ 4,090 CF</h2>
            <p>Move Size</p>
          </div>
        </div>
        <div className="right-info">
          <div>
            <h2>
              <FiArrowUp /> 03/06/18
            </h2>
            <p>Move Size</p>
          </div>
          <div>
            <h2>
              <FiMoreHorizontal />
              <FiChevronRight />
            </h2>
            <p></p>
          </div>
        </div>
        <div className="right-info">
          <div>
            <h2>
              <FiArrowDown /> 03/06/18
            </h2>
            <p>Move Size</p>
          </div>
          <div>
            <h2>
              <FiMoreHorizontal />
              <FiChevronRight />
            </h2>
            <p></p>
          </div>
        </div>
        <div className="right-info">
          <div>
            <h2>
              <FiAlignLeft />
            </h2>
            <p>Details</p>
          </div>
        </div>
      </div>
      <footer>
        <div>
          <h3>Company</h3>
        </div>
        <div>
          <p>East Coast Movers</p>
        </div>
      </footer>
      <footer>
        <div>
          <h3>Assigned to</h3>
        </div>
        <div className="footer-info">
          <img src={image9} alt="" />
          <span>Ariana Barros</span>
        </div>
      </footer>
    </div>
  );
}
