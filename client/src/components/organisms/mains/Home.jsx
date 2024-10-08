import styled from "styled-components";

const StyledSection = styled.section`
  min-height: calc(100vh - 60px);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  > h1 {
    font-weight: 300;
    font-size: 3rem;
    width: 40%;
  }
  > div {
    height: 60%;
    width: 60%;
    > img {
      width: 100%;
      border-radius: 3px;
    }
  }
`;

import library from "../../../../assets/library.png";

const Home = () => {
  return (
    <StyledSection>
      <h1>A reader lives a thousand lives before he dies . . . ...</h1>
      <div>
        <img src={library} alt="Library" />
      </div>
    </StyledSection>
  );
};

export default Home;
