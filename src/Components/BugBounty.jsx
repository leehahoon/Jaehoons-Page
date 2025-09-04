import { styled } from "styled-components";
import { useMediaQuery } from "react-responsive";

const Wrap = styled.section`
  padding: ${(p) => (p.$ismobile ? "20px 15px" : "32px 10%")};
  margin-bottom: 20px;
  background: #ffffff;
  border-radius: 12px;
  font-family: "Pretendard-Regular";
  overflow-x: hidden;
  
  @font-face {
    font-family: "Pretendard-Regular";
    src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff") format("woff");
    font-weight: 400;
    font-style: normal;
  }

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
    padding: ${(p) => (p.$ismobile ? "16px" : "20px")};
    background: #f8fafc;
    border-radius: 8px;
    margin-bottom: 16px;
    transition: all 0.2s ease;
    flex-direction: ${(p) => (p.$ismobile ? "column" : "row")};
    gap: ${(p) => (p.$ismobile ? "12px" : "0")};

    &:hover {
      background: #f1f5f9;
      transform: ${(p) => (p.$ismobile ? "none" : "translateX(2px)")};
    }

    .period {
      margin-right: ${(p) => (p.$ismobile ? "0" : "20px")};
      min-width: ${(p) => (p.$ismobile ? "auto" : "120px")};
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

      .bugBountyContents {
        .contents {
          margin-bottom: 12px;
          word-break: keep-all;
          color: #475569;
          font-size: 1rem;

          &:last-child {
            margin-bottom: 0;
          }

          .itemDetails {
            margin-top: 4px;
            // margin-left: 8px;

            .detail {
              margin-bottom: 2px;
              color: #475569;
              font-size: 1rem;
              line-height: 26px;
              word-break: break-word;
              overflow-wrap: break-word;
              hyphens: auto;

              .link {
                color: #64748b;
                text-decoration: none;
                font-weight: 500;
                padding: 2px 6px;
                border-radius: 4px;
                background: #f1f5f9;
                border: 1px solid #e2e8f0;
                transition: all 0.2s ease;
                
                .linkText {
                  color: #64748b;
                  text-decoration: none;
                  font-weight: 500;
                  transition: all 0.2s ease;
                }
                
                &:hover {
                  color: #3b82f6;
                  background: #e0f2fe;
                  border-color: #3b82f6;
                  transform: translateY(-1px);
                  
                  .linkText {
                    color: #3b82f6;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;


function BugBounty() {
  const isMobile = useMediaQuery({ query: "(max-width:767px)" });

  /** 연도별 데이터 구조 */
  const bugBountyByYear = {
    2023: [
      {
        title: "Synology Product Security Advisory",
        contents: [
          "- Found security vulnerabilities in camera",
          "- CVE-2023-47802, CVE-2023-47803, CVE-2024-39351",
          "https://www.synology.com/ko-kr/security/advisory/Synology_SA_23_15",
        ],
      },
      {
        title: "KVE",
        contents: [
          "- KVE-2023-0147, KVE-2023-0148, KVE-2023-0251, KVE-2023-5047, KVE-2023-5048",
        ],
      },
    ],
    2022: [
      {
        title: "ASUS Product Security Advisory",
        contents: [
          "- Found security issue in router",
          "- Fixed in Firmware version 3.0.0.4.386.51255",
        ],    
      },
      {
        title: "KVE",
        contents: [
          "- KVE-2022-0745, KVE-2022-1899, KVE-2022-1901, KVE-2022-1930",
        ],
      },
    ],
    2021: [
      {
        title: "FINDTHEGAP BugBounty",
        contents: [
          "- Found 20+ Vulnerabilities in Web, App services",
          "- Hall of Fame 6th in 2021",
        ],
      },
      {
        title: "KVE",
        contents: [
          "- KVE-2021-1130, KVE-2021-1167, KVE-2021-1168",
        ],
      },
    ],
  };

  const years = Object.keys(bugBountyByYear).sort((a, b) => b - a);

  return (
    <Wrap $ismobile={isMobile}>
      <div className="title">BUG BOUNTY</div>
      <ul className="heightBox">
        {years.map((year) => (
          <li key={year} className="listContainer">
            <div className="period">{year}</div>
            <div className="contentsContainer">
              <div className="bugBountyContents">
                {bugBountyByYear[year].map((item, idx) => (
                  <div key={idx} className="contents">
                    <strong>{item.title}</strong>
                    <div className="itemDetails">
                      {item.contents.map((content, i) => (
                        <div key={i} className="detail">
                          {content.startsWith("http") ? (
                            <>
                              - <a href={content} target="_blank" rel="noopener noreferrer" className="link">
                                <span className="linkText">Link</span>
                              </a>
                            </>
                          ) : (
                            content
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Wrap>
  );
}

export default BugBounty;
