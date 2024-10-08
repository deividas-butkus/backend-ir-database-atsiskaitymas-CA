import styled from "styled-components";
import { NavLink } from "react-router-dom";

import logo from "../../../assets/logo.png";

const StyledHeader = styled.header`
  height: 60px;
  padding: 0 10%;
  border-bottom: 1px solid #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
