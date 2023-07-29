import SideBar from "../SideBar/SideBar";
import Header from "../Header/Header";
import { styled } from "styled-components";
import Container from "../Container/Container";
const StyledLayout = styled.div`
  width: 100%;
  margin: 0 auto;
  .clear {
    clear: both;
  }
  .sidebarP {
    float: left;
    width: 16.5%;
    position: fixed;
    .sidebar {
    }
  }
  .RightSide {
    background-color: #f1f4f6;
    width: 83.5%;
    float: right;
    .header {
    }
  }
`;

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <div className="sidebarP">
        <SideBar className="sidebar" />
      </div>
      <div className="RightSide">
        <Container>
          <Header className="header" />
          {children}
        </Container>
      </div>
    </StyledLayout>
  );
};
export default Layout;
