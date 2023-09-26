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
    height: 420px;
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
`;

function Education() {
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });
  const educationValue = [
    {
      id: 1,
      period: "2018.03 ~ 2024.02",
      title: "B.S. Computer Science & Engineering at Soongsil University",
      contents: [
        "전공 : 컴퓨터학부",
        "전체 평점 : 3.89/4.5 취득학점 : 127/133",
      ],
    },
    {
      id: 2,
      period: "2015.03 ~ 2018.02",
      title:
        "Department of Information and Communication Technology at Sunrin Internet High School",
      contents: ["전공 : 정보통신과"],
    },
    {
      id: 3,
      period: "2016.03 ~ 2017.02",
      title: "KITRI BoB, 5th Security Consulting Track",
      contents: ["Best of the Best 5th 보안컨설팅 트랙 수료"],
    },
    {
      id: 4,
      period: "2024.02 ~ present",
      title: "카이스트 대학원",
      contents: ["?????????", "SDAfdfdsgsd"],
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
