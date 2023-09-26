import styled from "styled-components";
import Experiences from "./Experiences";

const IndexContainer = styled.ul`
  width: 30%;
  height: 300px;
  border: 1px solid black;
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: sticky;
  top: 0;

  .title {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }

  .listContainer {
    border: 1px solid black;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .list {
      font-size: 1.3rem;
      cursor: pointer;
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
}) {
  function scrollMove(element) {
    if (element.current) {
      element.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  const indexValue = [
    { id: 0, value: topRef, text: "Top" },
    { id: 1, value: aboutMeRef, text: "AboutMe" },
    { id: 2, value: educationRef, text: "Education" },
    { id: 3, value: experiencesRef, text: "Work Experiences" },
    { id: 4, value: projectsRef, text: "Projects" },
    { id: 5, value: talksRef, text: "Talks" },
    { id: 6, value: awardsRef, text: "Awards" },
    { id: 7, value: bugBountyRef, text: "Bug Bounty" },
  ];
  return (
    <IndexContainer>
      <span className="title">INDEX</span>
      <div className="listContainer">
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
      </div>
    </IndexContainer>
  );
}

export default Index;
