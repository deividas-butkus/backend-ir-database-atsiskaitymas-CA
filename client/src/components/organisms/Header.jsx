import styled from "styled-components";
import { NavLink } from "react-router-dom";

import logo from "../../../assets/logo.png";

const StyledHeader = styled.header`
  height: 60px;
  padding: 0 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #242424;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 1px 2px #99c8ff;
  > div {
    height: 100%;
    display: flex;
    align-items: center;
    > img {
      height: 80%;
    }
  }
  > nav {
    > ul {
      list-style: none;
      display: flex;
      gap: 20px;
    }
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <div>
        <img src={logo} alt="Library" />
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/books">Books</NavLink>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
};

export default Header;
