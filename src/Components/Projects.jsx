import { styled } from "styled-components";
import { useMediaQuery } from "react-responsive";

const ProjectsContainer = styled.section`
  padding: ${(props) => (props.$ismobile ? "0 15px" : "0 10%")};
  margin-bottom: 80px;

  @font-face {
    font-family: "Pretendard-Regular";
    src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
      format("woff");
    font-weight: 400;
    font-style: normal;
  }
  font-family: "Pretendard-Regular";

  .title {
    border-bottom: 1px solid rgb(236, 236, 235);
    padding-bottom: 10px;
    width: 100%;
    font-size: 1.5rem;
    font-family: "Noto Serif KR", serif;
    margin-bottom: ${(props) => (props.$ismobile ? "10px" : "20px")};
  }

  .heightBox {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0;
  }

  .listContainer {
    display: flex;
    font-size: ${(props) => (props.$ismobile ? "1rem" : "1.2rem")};

    .period {
      margin-right: ${(props) => (props.$ismobile ? "10px" : "20px")};
      width: 10%;
      min-width: ${(props) => (props.$ismobile ? "80px" : "100px")};
      display: flex;
    }

    .contentsContainer {
      display: flex;
      flex-direction: column;
      width: 100%;

      .projectsTitle {
        margin-bottom: 5px;
      }

      .projectsContents {
        .contents {
          margin-bottom: 2px;
          word-break: keep-all;
        }

        .link {
          text-decoration: none;

          .linkText {
            color: black;
            text-decoration-line: underline;
          }
        }
      }
    }
  }

  .listContainer:not(:last-of-type) {
    margin-bottom: 50px;
  }
`;

function Projects() {
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  const projectsValue = [
    {
      id: 1,
      period: "2022",
      title: "Static Program Analysis for Black Box",
      contents: [
        "- Research about vulns discovery for black-box programs",
        "- Development of taint analysis and fsb detection patterns",
        "https://github.com/mongddangdda/binary-magician-legacy",
      ],
    },
    {
      id: 2,
      period: "2021",
      title: "Privilege Escalation Vulnerability Analysis",
      contents: [
        "- Vulnerability analysis about privilege escalation",
        "- https://drive.google.com/drive/folders/1VBJ11OFed-9_2RJWTPaD4s48hBM-IJsc?usp=sharing",
      ],
    },
    {
      id: 3,
      period: "2016",
      title: "Smart Farm Security Guidelines",
      contents: [
        "- Analyzing smart farm security vulnerabilities",
        "- Discover vulns that can control farms remotely",
      ],
    },
  ];
  return (
    <ProjectsContainer $ismobile={isMobile}>
      <div className="title">PROJECTS</div>
      <ul className="heightBox">
        {projectsValue.map((el, index) => {
          return (
            <li key={el.id} className="listContainer">
              <div className="period">{el.period}</div>
              <div className="contentsContainer">
                <div className="projectsTitle">
                  <b>{el.title}</b>
                </div>
                <div className="projectsContents">
                  {el.contents.map((el, i) => {
                    return index === 0 && i === 2 ? (
                      <a target="blank_" key={i} className="link" href={el}>
                        - <span className="linkText">[ Github Link ]</span>
                      </a>
                    ) : (
                      <div className="contents" key={i}>
                        {el}
                      </div>
                    );
                  })}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </ProjectsContainer>
  );
}

export default Projects;
