import { styled } from "styled-components";
import { useMediaQuery } from "react-responsive";

const ProjectsContainer = styled.section`
  padding: ${(props) => (props.$ismobile ? "0 15px" : "0 10%")};
  margin-bottom: 80px;

  .title {
    border-bottom: 1px solid rgb(236, 236, 235);
    padding-bottom: 10px;
    width: 100%;
    font-size: 1.5rem;
    font-family: "Noto Serif KR", serif;
    margin-bottom: ${(props) => (props.$ismobile ? "10px" : "20px")};
  }

  .heightBox {
    height: 520px;
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
`;

function Projects() {
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  const projectsValue = [
    {
      id: 1,
      period: "2023",
      title: "보안 취약점 분석 및 제보",
      contents: [
        "- KISA, 파인더갭 등 버그바운티 참여",
        "- 약 55개 취약점 제보",
        "- SQL Injection, Buffer Overflow, Command Injection 등",
      ],
    },
    {
      id: 2,
      period: "2022",
      title: "Static Program Analysis for Black Box",
      contents: [
        "- Black-box 프로그램을 대상으로 취약점 발견 기술 연구 및 개발",
        "- TaintAnalysis 구현 및 FSB 탐지 패턴 제작",
        "https://github.com/mongddangdda/binary-magician-legacy",
      ],
    },
    {
      id: 3,
      period: "2021",
      title: "Privilege Escalation Vulnerability Analysis",
      contents: [
        "- 권한 상승 사례 분석 및 취약점 메커니즘 연구",
        "- “권한 상승 취약점 점검 가이드” 제작",
        "- 권한 상승 취약점 3건 제보",
      ],
    },
    {
      id: 4,
      period: "2016",
      title: "Smart Farm Security Guidelines",
      contents: [
        "- 스마트팜 보안 취약점 분석",
        "- 원격에서 농장을 조종할 수 있는 취약점 발견",
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
                    return index === 1 && i === 2 ? (
                      <a key={i} className="link" href="el">
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
