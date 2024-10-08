import { Outlet } from "react-router-dom";
import styled from "styled-components";

import Header from "../organisms/Header";
import Footer from "../organisms/Footer";

const StyledMain = styled.main`
  padding: 30px 10%;
  min-height: calc(100vh - 60px);
`;

const PageTemplate = () => {
  return (
    <>
      <Header />
      <StyledMain>
        <Outlet />
      </StyledMain>
      <Footer />
    </>
  );
};

export default PageTemplate;
