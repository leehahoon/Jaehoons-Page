import styled from "styled-components";

const IndexContainer = styled.nav`
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 220px;
  position: sticky;
  top: 20px;
  border-radius: 12px;
  padding: 24px;
  z-index: 10;

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
    font-weight: 600;
    color: #1e293b;
    margin-bottom: 20px;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 0;
      width: 30px;
      height: 2px;
      background: #3b82f6;
      border-radius: 1px;
    }
  }

  .listContainer {

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    list-style: none;
    padding: 0;
    gap: 4px;

    .list {
      font-size: 1rem;
      cursor: pointer;
      color: #64748b;
      padding: 10px 12px;
      padding-left: 0;
      border-radius: 8px;
      transition: all 0.2s ease;
      font-weight: 500;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      &:hover {
        background: #f8fafc;
        color: #3b82f6;
        transform: translateX(2px);
      }
    }
  }
`;

function Index({
  aboutMeRef,
  educationRef,
  experiencesRef,
  projectsRef,
  talksRef,
  awardsRef,
  bugBountyRef,
  publicationsRef,
}) {

  function scrollMove(element) {
    if (element.current) {
      element.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  const indexValue = [
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
    <IndexContainer>
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
