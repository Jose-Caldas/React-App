import {
  FiUsers,
  FiPieChart,
  FiZap,
  FiCalendar,
  FiClipboard,
  FiActivity,
  FiInbox,
  FiCheckCircle,
} from "react-icons/fi";

import Ellipse from "./Ellipse 1.png";
import "../styles/MenuBar.css";

export default function MenuBar() {
  return (
    <div className="menuBar">
      <div className="menuTop">
        <div className="logo">
          <div></div>
        </div>
        <FiPieChart />
        <FiZap />
        <FiCheckCircle />
        <FiCalendar />
        <FiClipboard />
        <FiUsers />
      </div>
      <div className="menuBottom">
        <FiActivity />
        <FiInbox id="green" />
        <img src={Ellipse} alt="avatar" />
      </div>
    </div>
  );
}
