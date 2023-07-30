import { styled } from "styled-components";
import { ReactComponent as Dashboard } from "../../assets/icons/layer group.svg";
import { ReactComponent as Products } from "../../assets/icons/grid.svg";
import { ReactComponent as Customers } from "../../assets/icons/users.svg";
import { ReactComponent as Orders } from "../../assets/icons/Order.svg";
import { ReactComponent as Shipments } from "../../assets/icons/shipping truck.svg";
import { ReactComponent as Transactions } from "../../assets/icons/credit card.svg";
import { ReactComponent as Settings } from "../../assets/icons/Setting.svg";
import { ReactComponent as Logout } from "../../assets/icons/Logout.svg";
import { NavLink } from "react-router-dom";
import Logo from '../../assets/logo/M logo 1.png';

const StyledSideBar = styled.div`
  height: 100vh;
  padding: 32px 50px 0 50px;
  box-shadow: 2px 4px 24px 0px rgba(185, 184, 184, 0.7);
  .around {
    text-align: left;
  }
  h1 {
    margin-bottom: 50px;
  }
  .active {
    color: #ff6f61;
    path {
      fill: #ff6f61;
    }
  }
  .navA:hover .iconSideBar {
    opacity: 1;
  }
  .navA:hover a {
    background-color: #ddd;
    border-radius: 5px;
    color: #ff6f61;
    path {
      fill: #ff6f61;
    }
  }
`;
const StyledNavItem = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 21px;
  color: #7a797d;
  a {
    width: 100%;
    padding: 16px 16px 16px 4px;
    display: flex;
    align-items: center;
    gap: 16px;
    text-decoration: unset;
    color: #7a797d;
  }
`;

const NavItem = ({ text, path, children }) => {
  return (
    <StyledNavItem className="navA">
      <NavLink to={path} className={"iconSideBar"}>
        {children}
        <span>{text}</span>
      </NavLink>
    </StyledNavItem>
  );
};

const SideBar = () => {
  return (
    <StyledSideBar>
      <div className="around">
        <h1><img src={Logo} alt="" /></h1>
        <NavItem text="Movies" path="/movie">
          <Products></Products>
        </NavItem>
        <NavItem text="Account" path="/account">
          <Customers></Customers>
        </NavItem>
      </div>
    </StyledSideBar>
  );
};

export default SideBar;
