import { styled } from "styled-components";
import { useMediaQuery } from "react-responsive";

const ExperiencesContainer = styled.section`
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

      .experiencesTitle {
        margin-bottom: 8px;
        
        b {
          font-size: 1.1rem;
             color: #475569;
          font-weight: 600;
        }
      }

      .experiencesContents {
        .contents {
          margin-bottom: 4px;
          word-break: break-word;
          overflow-wrap: break-word;
          hyphens: auto;
          color: #475569;
          font-size: 1rem;
          line-height: 26px;
        }
      }
    }
  }
`;

function Experiences() {
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  const experiencesValue = [
    {
      id: 1,
      period: "2022.10 ~ 2024.01",
      title: "Security Researcher at STEALIEN",
      contents: ["Penetration Testing and Security Researching"],
    },
  ];

  return (
    <ExperiencesContainer $ismobile={isMobile}>
      <div className="title">WORK EXPERIENCES</div>
      <ul className="heightBox">
        {experiencesValue.map((el) => {
          return (
            <li className="listContainer" key={el.id}>
              <div className="period">{el.period}</div>
              <div className="contentsContainer">
                <div className="experiencesTitle">
                  <b>{el.title}</b>
                </div>
                <div className="experiencesContents">
                  {el.contents.map((el, i) => {
                    return (
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
    </ExperiencesContainer>
  );
}

export default Experiences;
