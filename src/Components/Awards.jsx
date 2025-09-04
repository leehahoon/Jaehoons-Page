import { styled } from "styled-components";
import { useMediaQuery } from "react-responsive";

const AwardsContainer = styled.section`
  padding: ${(props) => (props.$ismobile ? "20px 15px" : "32px 10%")};
  margin-bottom: 60px;
  background: #ffffff;
  border-radius: 12px;
  overflow-x: hidden;
  
  @font-face {
    font-family: "Pretendard-Regular";
    src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
      format("woff");
    font-weight: 400;
    font-style: normal;
  }
  font-family: "Pretendard-Regular";

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
    padding: ${(props) => (props.$ismobile ? "16px" : "16px 20px")};
    background: #f8fafc;
    border-radius: 8px;
    margin-bottom: 12px;
    transition: all 0.2s ease;
    flex-direction: ${(props) => (props.$ismobile ? "column" : "row")};
    gap: ${(props) => (props.$ismobile ? "12px" : "0")};

    &:hover {
      background: #f1f5f9;
      transform: ${(props) => (props.$ismobile ? "none" : "translateX(2px)")};
    }

    .period {
      margin-right: ${(props) => (props.$ismobile ? "0" : "20px")};
      min-width: ${(props) => (props.$ismobile ? "auto" : "120px")};
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

      .awardsTitle {
        margin-bottom: 6px;
        
        b {
          font-size: 1.1rem;
          color: #1e293b;
          font-weight: 600;
        }
      }

      .awardContents {
        .contents {
          margin-bottom: 4px;
          word-break: break-word;
          overflow-wrap: break-word;
          hyphens: auto;
          color: #475569;
          font-size: 1rem;
          line-height: 26px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: ${(props) => (props.$ismobile ? "wrap" : "nowrap")};
          gap: ${(props) => (props.$ismobile ? "8px" : "0")};

          .prizeBadge {
            background: #f1f5f9;
            color: #475569;
            padding: 2px 6px;
            border-radius: 4px;
            font-size: 0.8rem;
            font-weight: 500;
            border: 1px solid #e2e8f0;
            flex-shrink: 0;
          }
        }

        .link {
          text-decoration: none;

          .linkText {
            color: #3b82f6;
            text-decoration: underline;
            transition: color 0.2s ease;
            
            &:hover {
              color: #1d4ed8;
            }
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
      title: "Hack the DRONE",
      contents: [
        "- 5th Prize",
      ],
    },
    {
      id: 2,
      period: "2023",
      title: "SSUCTF",
      contents: [
        "- 2nd Prize",
      ],
    },
    {
      id: 3,
      period: "2022",
      title: "HackingZone X-MAS Capture The Bug",
      contents: [
        "-  2nd Prize",
      ],
    },
    {
      id: 4,
      period: "2021",
      title: "Metasploit Community CTF",
      contents: [
        "- 4th Prize",
      ],
    },
    {
      id: 5,
      period: "2021",
      title: "Soongsil Software Contest",
      contents: [
        "- 3th Prize",
      ],
    },
    {
      id: 6,
      period: "2021",
      title: "Hack The GRU",
      contents: [
        "- 2nd Prize",
      ],
    },
    {
      id: 7,
      period: "2016",
      title: "WhiteHat Contest, Ministry of Defense",
      contents: [
        "- 2nd Prize",
      ],
    },
    {
      id: 8,
      period: "2016",
      title: "KISA Development & Security Competition",
      contents: [
        "- 2nd Prize",
      ],
    },
  ];

  // 년도별로 그룹화
  const groupedAwards = awardsValue.reduce((acc, award) => {
    const year = award.period;
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(award);
    return acc;
  }, {});

  // 년도별로 정렬 (최신순)
  const sortedYears = Object.keys(groupedAwards).sort((a, b) => b - a);

  return (
    <AwardsContainer $ismobile={isMobile}>
      <div className="title">AWARDS</div>
      <ul className="heightBox">
        {sortedYears.map((year) => (
          <li key={year} className="listContainer">
            <div className="period">{year}</div>
            <div className="contentsContainer">
              <div className="awardContents">
                {groupedAwards[year].map((award, index) => (
                  <div key={award.id} className="contents">
                    <strong>{award.title}</strong> <span className="prizeBadge">{award.contents[0].replace('- ', '')}</span>
                  </div>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </AwardsContainer>
  );
}

export default Awards;