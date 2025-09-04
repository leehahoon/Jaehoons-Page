import { styled } from "styled-components";
import { useMediaQuery } from "react-responsive";

const ProjectsContainer = styled.section`
  padding: ${(props) => (props.$ismobile ? "20px 15px" : "32px 10%")};
  margin-bottom: 60px;
  background: #ffffff;
  border-radius: 12px;
  overflow-x: hidden;

  @font-face {
    font-family: "Pretendard-Regular";
    src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
      format("woff");
    font-weight: 400;
    font-style: normal;
  }
  font-family: "Pretendard-Regular";

  .title {
    font-size: 1.75rem;
    font-weight: 600;
    color: #1e293b;
    margin-bottom: 24px;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 0;
      width: 40px;
      height: 2px;
      background: #3b82f6;
      border-radius: 1px;
    }
  }

  .heightBox {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0;
  }

  .listContainer {
    display: flex;
    padding: ${(props) => (props.$ismobile ? "16px" : "20px")};
    background: #f8fafc;
    border-radius: 8px;
    margin-bottom: 16px;
    transition: all 0.2s ease;
    flex-direction: ${(props) => (props.$ismobile ? "column" : "row")};
    gap: ${(props) => (props.$ismobile ? "12px" : "0")};

    &:hover {
      background: #f1f5f9;
      transform: ${(props) => (props.$ismobile ? "none" : "translateX(2px)")};
    }

    .period {
      margin-right: ${(props) => (props.$ismobile ? "0" : "20px")};
      min-width: ${(props) => (props.$ismobile ? "auto" : "120px")};
      font-size: 0.9rem;
      color: #64748b;
      font-weight: 500;
      display: flex;
      align-items: flex-start;
      padding-top: 2px;
    }

    .contentsContainer {
      display: flex;
      flex-direction: column;
      width: 100%;

      .projectsTitle {
        margin-bottom: 8px;
        
        b {
          font-size: 1.1rem;
         color: #475569;
          font-weight: 600;
        }
      }

      .projectsContents {
        .contents {
          margin-bottom: 4px;
          word-break: break-word;
          overflow-wrap: break-word;
          hyphens: auto;
          color: #475569;
          font-size: 1rem;
          line-height: 26px;
        }

        .link {
          text-decoration: none;
          color: #475569;

          .linkText {
            color: #64748b;
            text-decoration: none;
            font-weight: 500;
            padding: 2px 6px;
            border-radius: 4px;
            background: #f1f5f9;
            border: 1px solid #e2e8f0;
            transition: all 0.2s ease;
            
            &:hover {
              color: #3b82f6;
              background: #e0f2fe;
              border-color: #3b82f6;
              transform: translateY(-1px);
            }
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
        "• Research about vulns discovery for black-box programs",
        "• Development of taint analysis and fsb detection patterns",
        "https://github.com/mongddangdda/binary-magician-legacy",
      ],
    },
    {
      id: 2,
      period: "2021",
      title: "Privilege Escalation Vulnerability Analysis",
      contents: [
        "• Vulnerability analysis about privilege escalation",
        "https://drive.google.com/drive/folders/1VBJ11OFed-9_2RJWTPaD4s48hBM-IJsc?usp=sharing",
      ],
    },
    {
      id: 3,
      period: "2016",
      title: "Smart Farm Security Guidelines",
      contents: [
        "• Analyzing smart farm security vulnerabilities",
        "• Discover vulns that can control farms remotely",
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
                        • <span className="linkText">Github Link </span>
                      </a>
                    ) : index === 1 && i === 1 ? (
                      <a target="blank_" key={i} className="link" href={el}>
                        • <span className="linkText">Google Drive Link </span>
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
