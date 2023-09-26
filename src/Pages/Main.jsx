import styled from "styled-components";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useMediaQuery } from "react-responsive";

const MainContainer = styled.main`
  width: 100%;
  max-width: 1440px;
  border: 1px solid black;
  height: 100%;
  padding: ${(props) => (props.$ismobile ? "0" : "0 10%")};
`;

function Main() {
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  return (
    <MainContainer $ismobile={isMobile}>
      <Header />
      메인페이지에오
      <Footer />
    </MainContainer>
  );
}

export default Main;
