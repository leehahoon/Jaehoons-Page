import { styled } from "styled-components";
import { useMediaQuery } from "react-responsive";

const EducationContainer = styled.section`
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

      .educationTitle {
        margin-bottom: 8px;
        
        b {
          font-size: 1.1rem;
           color: #475569;
          font-weight: 600;
        }
      }

      .educationContents {
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

function Education() {
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });
  const educationValue = [
    {
      id: 1,
      period: "2024.02 ~ present",
      title: "KAIST",
      contents: ["M.S. in Information Security"],
    },
    {
      id: 2,
      period: "2018.03 ~ 2024.02",
      title: "Soongsil University",
      contents: ["B.S. in Computer Science & Engineering"],
    },
    {
      id: 3,
      period: "2015.03 ~ 2018.02",
      title: "Sunrin Internet High School",
      contents: ["Information and Communication Technology"],
    },
    {
      id: 4,
      period: "2016.03 ~ 2017.02",
      title: "KITRI Best of the Best",
      contents: ["5th Security Consulting Track"],
    },
  ];
  return (
    <EducationContainer $ismobile={isMobile}>
      <div className="title">EDUCATION</div>
      <ul className="heightBox">
        {educationValue.map((el) => {
          return (
            <li key={el.id} className="listContainer">
              <div className="period">{el.period}</div>
              <div className="contentsContainer">
                <div className="educationTitle">
                  <b>{el.title}</b>
                </div>
                <div className="educationContents">
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
    </EducationContainer>
  );
}

export default Education;
