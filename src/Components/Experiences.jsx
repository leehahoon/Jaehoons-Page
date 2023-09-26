import { styled } from "styled-components";
import { useMediaQuery } from "react-responsive";

const ExperiencesContainer = styled.section`
  padding: ${(props) => (props.$ismobile ? "0 15px" : "0 10%")};
  margin-bottom: ${(props) => (props.$ismobile ? "40px" : "60px")};

  .title {
    border-bottom: 1px solid rgb(236, 236, 235);
    padding-bottom: 10px;
    width: 100%;
    font-size: 1.5rem;
    font-family: "Noto Serif KR", serif;
    margin-bottom: ${(props) => (props.$ismobile ? "10px" : "20px")};
  }

  .heightBox {
    height: 180px;
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
        margin-bottom: 2px;
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

function Experiences() {
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  const experiencesValue = [
    {
      id: 1,
      period: "2022.10 ~ 2024.01",
      title: "STEALIEN",
      contents: [
        "보안 취약점 분석 및 연구",
        "모의해킹 업무 및 보안기술 연구개발 수행",
      ],
    },
    {
      id: 2,
      period: "2019.04 ~ 2020.11",
      title: "육군 3군단",
      contents: ["정보보호병", "컴퓨터 정보보호 관련 임무 수행"],
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
    </ExperiencesContainer>
  );
}

export default Experiences;
