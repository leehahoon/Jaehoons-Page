import styled from "styled-components";
import { useState, useEffect } from "react";

const IndexContainer = styled.nav`

  height: 420px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 260px;
  position: ${props => props.$isFixed ? 'fixed' : 'sticky'};
  top: ${props => props.$isFixed ? '30px' : '30px'};
  left: ${props => props.$isFixed ? '5%' : 'auto'};
  border-left: 2px solid #5d5d5d;
  padding-left: 30px;

  @font-face {
    font-family: "Pretendard-Regular";
    src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
      format("woff");
    font-weight: 400;
    font-style: normal;
  }
  font-family: "Pretendard-Regular";

  .title {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }

  .listContainer {
    height: 340px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    list-style: none;
    padding: 0;

    .list {
      font-size: 1.3rem;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

function Index({
  topRef,
  aboutMeRef,
  educationRef,
  experiencesRef,
  projectsRef,
  talksRef,
  awardsRef,
  bugBountyRef,
  publicationsRef,
  onIndexFixedChange,
}) {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY >= 160) {
        setIsFixed(true);
        onIndexFixedChange(true);
      } else {
        setIsFixed(false);
        onIndexFixedChange(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [onIndexFixedChange]);

  function scrollMove(element) {
    if (element.current) {
      element.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  const indexValue = [
    { id: 0, value: topRef, text: "Top" },
    { id: 1, value: aboutMeRef, text: "About Me" },
    { id: 2, value: educationRef, text: "Education" },
    { id: 3, value: publicationsRef, text: "Publications" },
    { id: 4, value: experiencesRef, text: "Work Experiences" },
    { id: 5, value: projectsRef, text: "Projects" },
    { id: 6, value: talksRef, text: "Talks" },
    { id: 7, value: awardsRef, text: "Awards" },
    { id: 8, value: bugBountyRef, text: "Bug Bounty" },
  ];
  return (
    <IndexContainer $isFixed={isFixed}>
      <span className="title">INDEX</span>
      <ul className="listContainer">
        {indexValue.map((el) => {
          return (
            <li
              onClick={() => {
                scrollMove(el.value);
              }}
              className="list"
              key={el.id}
            >
              {el.text}
            </li>
          );
        })}
      </ul>
    </IndexContainer>
  );
}

export default Index;
