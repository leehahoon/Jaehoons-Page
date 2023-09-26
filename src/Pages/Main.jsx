import styled from "styled-components";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const MainContainer = styled.main`
  width: 100%;
  max-width: 1440px;
  border: 1px solid black;
  height: 100%;
`;

function Main() {
  return (
    <MainContainer>
      <Header />
      메인페이지에오
      <Footer />
    </MainContainer>
  );
}

export default Main;
