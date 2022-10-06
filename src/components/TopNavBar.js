import { FaBars } from "react-icons/fa";
const iconSize = 30;

function TopNavBar({ showSidebar }) {
  return (
    <div className="navbar">
      <ul className="nav-menu-items">
        <li className="nav-text nav-bar-item">
          <button className="menu" onClick={showSidebar}>
            <FaBars size={iconSize - 5} />
            <span>Menu</span>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default TopNavBar;
