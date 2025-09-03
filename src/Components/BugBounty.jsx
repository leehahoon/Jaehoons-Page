import { styled } from "styled-components";
import { useMediaQuery } from "react-responsive";

const BugBountyContainer = styled.section`
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

        .link {
          text-decoration: none;
          color: black;

          .linkText {
            color: black;
            text-decoration-line: underline;
          }
        }
      }
    }
  }

  .listContainer:not(:last-of-type) {
    margin-bottom: 50px;
  }
`;

function BugBounty() {
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  const bugBountyValue = [
    {
      id: 1,
      period: "2023",
      title: "Synology Product Security Advisory",
      contents: [
        "- Found security vulnerabilities in camera",
        "- CVE-2023-47802, CVE-2023-47803, CVE-2024-39351",
        "https://www.synology.com/ko-kr/security/advisory/Synology_SA_23_15",
      ],
    },
    {
      id: 2,
      period: "2021 ~ 2023",
      title: "KVE",
      contents: [
        "- KVE-2023-0147, KVE-2023-0148, KVE-2023-0251, KVE-2023-5047,",
        "\u00A0\u00A0 KVE-2023-5048",
        "- KVE-2022-0745, KVE-2022-1899, KVE-2022-1901, KVE-2022-1930",
        "- KVE-2021-1130, KVE-2021-1167, KVE-2021-1168",
      ],
    },
    {
      id: 3,
      period: "2022",
      title: "ASUS Product Security Advisory",
      contents: [
        "- Found security issue in router",
        "- Fixed in Firmware version 3.0.0.4.386.51255",
      ],
    },
    {
      id: 4,
      period: "2021 ~ 2022",
      title: "FINDTHEGAP BugBounty",
      contents: [
        "- Found 20+ Vulnerabilities in Web, App services",
        "- Hall of Fame 6th in 2021",
      ],
    },
  ];
  return (
    <BugBountyContainer $ismobile={isMobile}>
      <div className="title">BUG BOUNTY</div>
      <ul className="heightBox">
        {bugBountyValue.map((el, index) => {
          return (
            <li key={el.id} className="listContainer">
              <div className="period">{el.period}</div>
              <div className="contentsContainer">
                <div className="educationTitle">
                  <b>{el.title}</b>
                </div>
                <div className="educationContents">
                  {el.contents.map((el, i) => {
                    return index === 0 && i === 2 ? (
                      <a target="blank_" key={i} className="link" href={el}>
                        - <span className="linkText">[ Link ]</span>
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
    </BugBountyContainer>
  );
}

export default BugBounty;