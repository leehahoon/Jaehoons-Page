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
import Publications from "../Components/Publication";
import ScrollToTop from "../Components/ScrollToTop";
import { useMediaQuery } from "react-responsive";
import { useRef } from "react";

const MainContainer = styled.main`
  width: 100%;
  max-width: 1800px;
  background: #f8fafc;
  padding-bottom: 100px;
  overflow-x: hidden;
`;

const ContentsContainer = styled.div`
  width: 100%;
  max-width: 100vw;
  padding: ${(props) => (props.$ismobile ? "0" : "0 5%")};
  display: flex;
  flex-direction: ${(props) => (props.$ismobile ? "column" : "row")};
  gap: ${(props) => (props.$ismobile ? "0" : "40px")};
  overflow-x: hidden;
`;

const Contents = styled.div`
  flex: 1;
  background: #ffffff;
  border-radius: 12px;
  padding: ${(props) => (props.$ismobile ? "20px" : "32px")};
  overflow-x: hidden;
  word-break: break-word;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
  overflow-wrap: break-word;
  max-width: 100%;
  box-sizing: border-box;
`;

function Main() {
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });


  const topRef = useRef(null);
  const aboutMeRef = useRef(null);
  const educationRef = useRef(null);
  const experiencesRef = useRef(null);
  const projectsRef = useRef(null);
  const talksRef = useRef(null);
  const awardsRef = useRef(null);
  const bugBountyRef = useRef(null);
  const publicationsRef = useRef(null);

  return (
    <MainContainer $ismobile={isMobile}>
      <div ref={topRef} />
      <Header />
      <ContentsContainer>
        {!isMobile && (
          <Index
            aboutMeRef={aboutMeRef}
            educationRef={educationRef}
            experiencesRef={experiencesRef}
            projectsRef={projectsRef}
            talksRef={talksRef}
            awardsRef={awardsRef}
            bugBountyRef={bugBountyRef}
            publicationsRef={publicationsRef}
          />
        )}
        <Contents $ismobile={isMobile}>
          <div ref={aboutMeRef} />
          <AboutMe />
          <div ref={educationRef} />
          <Education />
          <div ref={publicationsRef} />
          <Publications />
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
      <ScrollToTop />
    </MainContainer>
  );
}

export default Main;
