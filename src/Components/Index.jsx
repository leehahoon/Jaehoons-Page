import styled from "styled-components";

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
  aboutMeRef,
  educationRef,
  workExperiencesRef,
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
    "AboutMe",
    "Education",
    "Work Experiences",
    "Projects",
    "Talks",
    "Awards",
    "Bug Bounty",
  ];
  return (
    <IndexContainer>
      <span className="title">INDEX</span>
      <div className="listContainer">
        {indexValue.map((el) => {
          return <li className="list">{el}</li>;
        })}
      </div>
    </IndexContainer>
  );
}

export default Index;
