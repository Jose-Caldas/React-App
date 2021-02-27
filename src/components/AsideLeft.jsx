import { FiPlus, FiSearch } from "react-icons/fi";
import "../styles/AsideLeft.css";
import Cards from "./Cards";

import Ellipse from "./Ellipse 2.png";
import Ellipse3 from "./Ellipse 3.png";
import Ellipse4 from "./Ellipse 4.png";
import Ellipse5 from "./Ellipse 5.png";

export function AsideLeft() {
  return (
    <div class="asideLeftContainer">
      <header>
        <h4>Search Inbox</h4>
        <FiSearch />
      </header>
      <button>
        <FiPlus />
        Compose
      </button>
      <span>PINNED</span>
      <Cards
        h2={<img src={Ellipse} alt="avatar" />}
        strong="Ham Chuwon"
        small="Today"
        span="2"
        description="Please review and sing the last Bin..."
        paragraph="Hello John, I would really like to see some examples of the previous"
      />
      <Cards
        h2={<img src={Ellipse3} alt="avatar" />}
        strong="Heas"
        small="Yesterday"
        span="2"
        description="Some content"
        paragraph="Hello John, I would really like to see some examples of the previous"
      />
      <span>SEEN</span>
      <Cards
        h2={<img src={Ellipse4} alt="avatar" />}
        strong="Ham Chuwon"
        small="Feb 23"
        span="3"
        description="Please review and sing the last Bin..."
        paragraph="Hello John, I would really like to see some examples of the previous"
      />
      <Cards
        h2={<img src={Ellipse5} alt="avatar" />}
        strong="Ham Chuwon"
        small="Feb 22"
        span="4"
        description="Please review and sing the last Bin..."
        paragraph="Hello John, I would really like to see some examples of the previous"
      />
      <Cards
        h2={<img src={Ellipse} alt="avatar" />}
        strong="Ham Chuwon"
        small="Feb 24"
        span="2"
        description="Please review and sing the last Bin..."
        paragraph="Hello John, I would really like to see some examples of the previous"
      />
    </div>
  );
}
