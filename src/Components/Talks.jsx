import { styled } from "styled-components";
import { useMediaQuery } from "react-responsive";

const TalksContainer = styled.section`
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
    height: 300px;
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

      .talksTitle {
        margin-bottom: 5px;
      }

      .talksContents {
        list-style-type: none;
        padding: 0;
        .contents {
          margin-bottom: 2px;
          word-break: keep-all;
        }
      }
    }
  }
`;

function Talks() {
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });
  const talksValue = [
    {
      id: 1,
      period: "2022.06",
      title:
        "Methodology of Privilege Escalation Vulnerability Analysis, Stealien Security Seminar",
      contents: [
        "- “권한 상승 취약점 분석 방법론”",
        "- 관리적, 기술적 측면의 권한 상승 취약점 소개",
      ],
    },
    {
      id: 2,
      period: "2021.08",
      title: "KakaoTalk Hooking, 23th HackingCamp ",
      contents: ["- “카카오톡 후킹”", "- 카카오톡 분석 및 채팅 처리구문 후킹"],
    },
    {
      id: 3,
      period: "2016.05",
      title: "The Importance of Hardware Security, Codegate Junior Session",
      contents: [
        "- “로우레벨 해킹사례로 본 하드웨어 보안의 중요성”",
        "- Rowhammer 취약점, IoT 장비 등 하드웨어 해킹 사례 분석",
      ],
    },
  ];

  return (
    <TalksContainer $ismobile={isMobile}>
      <div className="title">PRESENTATIONS</div>
      <ul className="heightBox">
        {talksValue.map((el) => {
          return (
            <li key={el.id} className="listContainer">
              <div className="period">{el.period}</div>
              <div className="contentsContainer">
                <div className="talksTitle">
                  <b>{el.title}</b>
                </div>
                <ul className="talksContents">
                  {el.contents.map((el, i) => {
                    return (
                      <li className="contents" key={i}>
                        {el}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>
          );
        })}
      </ul>
    </TalksContainer>
  );
}

export default Talks;
