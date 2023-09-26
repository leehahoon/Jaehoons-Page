import { styled } from "styled-components";
import { useMediaQuery } from "react-responsive";

const AwardsContainer = styled.section`
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
    height: 690px;
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

      .wardsTitle {
        margin-bottom: 10px;
      }

      .wardsContents {
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

function Awards() {
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  const awardsValue = [
    {
      id: 1,
      period: "2023",
      title: "SSUCTF, 2nd Prize",
      contents: ["- 숭실대학교 해킹방어대회"],
    },
    {
      id: 2,
      period: "2023",
      title: "HackingZone X-MAS Capture The Bug, 2nd Prize",
      contents: ["- 웹사이트, 모바일앱 서비스 취약점 찾기 대회"],
    },
    {
      id: 3,
      period: "2021",
      title: "Metasploit Community CTF, 4th Prize",
      contents: [" PoSTLTimes 팀", "- RAPID7 주최 해킹대회"],
    },
    {
      id: 4,
      period: "2021",
      title: "숭실대학교 컴퓨터학부 소프트웨어 공모전",
      contents: [
        "- 은상",
        "- 연인들을 위한 핀테크 서비스 개발",
        "- 서버 및 데이터베이스 개발",
      ],
    },
    {
      id: 5,
      period: "2021",
      title: "Hack The GRU, 2nd Prize",
      contents: ["- “블록체인 안전자산 보관서비스” 버그바운티 대회"],
    },
    {
      id: 6,
      period: "2016",
      title: "WhiteHat Contest, 2nd Prize",
      contents: ["- 사이버 보안분야 발전에 기여할 정책 또는 기술 제언"],
    },
    {
      id: 7,
      period: "2016",
      title:
        "Software Contest, Application Security Section 2nd Prize, Minister of the Interior Award",
      contents: ["- 안전한 소프트웨어 개발 및 취약점 점검 대회"],
    },
  ];

  return (
    <AwardsContainer $ismobile={isMobile}>
      <div className="title">AWARDS</div>
      <ul className="heightBox">
        {awardsValue.map((el, index) => {
          return (
            <li key={el.id} className="listContainer">
              <div className="period">{el.period}</div>
              <div className="contentsContainer">
                <div className="awardsTitle">
                  <b>{el.title}</b>
                </div>
                <div className="wardsContents">
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
    </AwardsContainer>
  );
}

export default Awards;
