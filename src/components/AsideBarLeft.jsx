import { FiSearch, FiPlus } from "react-icons/fi";
import Cards from "./Cards";

export default function AsideBarLeft() {
  return (
    <div className="asideBarLeft">
      <header class="header-span">
        <h4>Search Inbox</h4>
        <FiSearch />
      </header>
      <div>
        <button>
          <FiPlus /> Compose
        </button>
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
