import { styled } from "styled-components";
import { useMediaQuery } from "react-responsive";

const ExperiencesContainer = styled.section`
  padding: ${(props) => (props.$ismobile ? "0 15px" : "0 10%")};
  margin-bottom: ${(props) => (props.$ismobile ? "40px" : "80px")};
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
    height: 60px;
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

    .experiencesContainer {
      display: flex;
      flex-direction: column;
      width: 100%;

      .experiencesTitle {
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
    // {
    //   id: 2,
    //   period: "2019.04 ~ 2020.11",
    //   title: "육군 3군단",
    //   contents: ["정보보호병", "컴퓨터 정보보호 관련 임무 수행"],
    // },
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
