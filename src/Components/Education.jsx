import { styled } from "styled-components";
import { useMediaQuery } from "react-responsive";

const EducationContainer = styled.section`
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

      .educationTitle {
        margin-bottom: 5px;
      }

      .educationContents {
        .contents {
          margin-bottom: 2px;
          word-break: keep-all;
        }
      }
    }
  }

  .listContainer:not(:last-of-type) {
    margin-bottom: 50px;
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
      contents: ["Department of Information and Communication Technology"],
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
