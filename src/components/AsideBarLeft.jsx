import { FiUsers } from "react-icons/fi";
import Cards from "./Cards";

export default function AsideBar() {
  return (
    <div className="asideBarLeft">
      <header class="header-span">
        <h4>Search Inbox</h4>
        <FiUsers />
      </header>
      <div>
        <button>+ Compose</button>
      </div>
      <h5>PINED</h5>
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
    </div>
  );
}
