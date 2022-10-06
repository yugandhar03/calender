import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons";
import styled from "styled-components";

const Nav = styled.nav`
  padding: 0rem;
  @media (min-width: 800px) {
    position: fixed;
    width: 220px;
    height: calc(100% - 64px);
  }
`;

function Navbar({ sidebar, isMobile, showSidebar }) {
  return (
    <Nav>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav
          id="nav"
          className={sidebar ? "nav-menu active" : "nav-menu"}
          onClick={isMobile ? showSidebar : null}
        >
          <ul className="nav-menu-items">
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </Nav>
  );
}

export default Navbar;
