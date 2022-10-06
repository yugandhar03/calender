import React, { useState } from "react";
import TopNavBar from "./TopNavBar";
import Navbar from "./Navbar";
import styled from "styled-components";
// component styles
var isMobile = false;
var screeSize = 800;

const Wrapper = styled.div`
  @media (min-width: 800px) {
    display: flex;
    position: relative;
    height: calc(100% - 64px);
    width: 100%;
    flex: auto;
    flex-direction: column;
  }
`;

const Main = styled.main`
  position: fixed;
  height: 100%;
  width: 100%;
  padding-top: 1em;
  overflow-y: scroll;
  @media (min-width: 800px) {
    flex: 1;
    margin-left: 220px;
    height: calc(100% - 64px);
    width: calc(100% - 220px);
  }
`;

const Layout = ({ children }) => {
  if (window.innerWidth < screeSize) {
    isMobile = true;
  } else {
    isMobile = false;
  }

  const [sidebar, setSidebar] = useState(!isMobile);

  const showSidebar = () => setSidebar(!sidebar);
  window.addEventListener("resize", () => {
    if (window.innerWidth < screeSize && sidebar) {
      showSidebar();
    } else if (window.innerWidth >= screeSize && sidebar === false) {
      showSidebar();
    }
  });

  return (
    <React.Fragment>
      <TopNavBar showSidebar={showSidebar} />
      <Wrapper>
        <div className="navigationWrapper">
          <Navbar
            sidebar={sidebar}
            isMobile={isMobile}
            showSidebar={showSidebar}
          />
          <Main
            onClick={() => {
              if (isMobile && sidebar) {
                showSidebar();
              }
            }}
          >
            {children}
          </Main>
        </div>
      </Wrapper>
    </React.Fragment>
  );
};
export default Layout;
