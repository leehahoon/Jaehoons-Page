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

  .listContainer:not(:last-of-type) {
    margin-bottom: 20px;
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
    },
    {
      id: 2,
      period: "2023",
      title: "HackingZone X-MAS Capture The Bug, 2nd Prize",
    },
    {
      id: 3,
      period: "2021",
      title: "Metasploit Community CTF, 4th Prize",
    },
    {
      id: 4,
      period: "2021",
      title: "Soongsil Software Contest, 2nd Prize",
    },
    {
      id: 5,
      period: "2021",
      title: "Hack The GRU, 2nd Prize",
    },
    {
      id: 6,
      period: "2016",
      title: "WhiteHat Contest, 2nd Prize",
    },
    {
      id: 7,
      period: "2016",
      title: "Software Contest, Application Security Section, 2nd Prize",
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
                <div className="awardsTitle">{el.title}</div>
              </div>
            </li>
          );
        })}
      </ul>
    </AwardsContainer>
  );
}

export default Awards;
