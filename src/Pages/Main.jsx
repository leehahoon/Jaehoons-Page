import styled from "styled-components";
import Header from "../Components/Header";
import Index from "../Components/Index";
import AboutMe from "../Components/AboutMe";
import Education from "../Components/Education";
import Experiences from "../Components/Experiences";
import Projects from "../Components/Proejects";
import Footer from "../Components/Footer";
import { useMediaQuery } from "react-responsive";

const MainContainer = styled.main`
  width: 100%;
  max-width: 1440px;
`;

const ContentsContainer = styled.div`
  width: 100%;
  display: flex;
`;

const Contents = styled.div`
  width: 100%;
`;

function Main() {
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  return (
    <MainContainer $ismobile={isMobile}>
      <Header />
      <ContentsContainer>
        {isMobile ? " " : <Index />}
        <Contents>
          <AboutMe />
          <Education />
          <Experiences />
          <Projects />
        </Contents>
      </ContentsContainer>
      <Footer />
    </MainContainer>
  );
}

export default Main;
