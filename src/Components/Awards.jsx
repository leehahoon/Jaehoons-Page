import { styled } from "styled-components";
import { useMediaQuery } from "react-responsive";

const AwardsContainer = styled.section`
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
    height: 730px;
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
      title: "SSUCTF",
      contents: ["- Advanced 2위", "- 숭실대학교 해킹방어대회"],
    },
    {
      id: 2,
      period: "2023",
      title: "HackingZone X-MAS Capture The Bug",
      contents: ["- 2위", "- 웹사이트, 모바일앱 서비스 취약점 찾기 대회"],
    },
    {
      id: 3,
      period: "2021",
      title: "Metasploit Community CTF",
      contents: ["- 4위, PoSTLTimes 팀", "- RAPID7 주최 해킹대회"],
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
      title: "Hack The GRU",
      contents: [
        "- 우수상",
        "- “블록체인 안전자산 보관서비스” 버그바운티 대회",
      ],
    },
    {
      id: 6,
      period: "2016",
      title: "화이트햇 콘테스트 기술공모전",
      contents: [
        "- 최우수상",
        "- 사이버 보안분야 발전에 기여할 정책 또는 기술 제언",
      ],
    },
    {
      id: 7,
      period: "2016",
      title: "소프트웨어 보안경진대회",
      contents: ["- 최우수상", "- 안전한 소프트웨어 개발 및 취약점 점검 대회"],
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
                <div className="educationTitle">
                  <b>{el.title}</b>
                </div>
                <div className="educationContents">
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
