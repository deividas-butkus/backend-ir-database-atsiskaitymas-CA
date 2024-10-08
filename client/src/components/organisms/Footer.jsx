import styled from "styled-components";

const StyledFooters = styled.main`
  padding: 0 10%;
  height: 100px;
  background-color: #ccc;
  color: #000;
`;

const Footer = () => {
  return (
    <StyledFooters>
      <span>Footer</span>
    </StyledFooters>
  );
};

export default Footer;
