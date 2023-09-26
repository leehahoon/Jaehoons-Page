import styled from "styled-components";
import Header from "../Components/Header";
import Index from "../Components/Index";
import AboutMe from "../Components/AboutMe";
import Education from "../Components/Education";
import Experiences from "../Components/Experiences";
import Projects from "../Components/Projects";
import Talks from "../Components/Talks";
import Awards from "../Components/Awards";
import BugBounty from "../Components/BugBounty";
import Footer from "../Components/Footer";
import { useMediaQuery } from "react-responsive";
import { useRef } from "react";

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

  const aboutMeRef = useRef(null);
  const educationRef = useRef(null);
  const experiencesRef = useRef(null);
  const projectsRef = useRef(null);
  const talksRef = useRef(null);
  const awardsRef = useRef(null);
  const bugBountyRef = useRef(null);

  return (
    <MainContainer $ismobile={isMobile}>
      <Header />
      <ContentsContainer>
        {isMobile ? (
          " "
        ) : (
          <Index
            aboutMeRef={aboutMeRef}
            educationRef={educationRef}
            experiencesRef={experiencesRef}
            projectsRef={projectsRef}
            talksRef={talksRef}
            awardsRef={awardsRef}
            bugBountyRef={bugBountyRef}
          />
        )}
        <Contents>
          <div ref={aboutMeRef} />
          <AboutMe />
          <div ref={educationRef} />
          <Education />
          <div ref={experiencesRef} />
          <Experiences />
          <div ref={projectsRef} />
          <Projects />
          <div ref={talksRef} />
          <Talks />
          <div ref={awardsRef} />
          <Awards />
          <div ref={bugBountyRef} />
          <BugBounty />
        </Contents>
      </ContentsContainer>
      <Footer />
    </MainContainer>
  );
}

export default Main;
