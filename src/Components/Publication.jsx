import { styled } from "styled-components";
import { useMediaQuery } from "react-responsive";

const PublicationsContainer = styled.section`
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
    padding: ${(props) => (props.$ismobile ? "16px" : "20px")};
    background: #f8fafc;
    border-radius: 8px;
    margin-bottom: 16px;
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

      .publicationsTitle {
        margin-bottom: 8px;
        
        b {
          font-size: 1.1rem;
          color: #1e293b;
          font-weight: 600;
        }
      }

      .publicationsContents {
        .contents {
          margin-bottom: 4px;
          word-break: break-word;
          overflow-wrap: break-word;
          hyphens: auto;
          color: #475569;
          font-size: 1rem;
          line-height: 26px;
        }

        .link {
          text-decoration: none;

          .linkText {
            color: #64748b;
            text-decoration: none;
            font-weight: 500;
            padding: 2px 6px;
            border-radius: 4px;
            background: #f1f5f9;
            border: 1px solid #e2e8f0;
            transition: all 0.2s ease;
            
            &:hover {
              color: #3b82f6;
              background: #e0f2fe;
              border-color: #3b82f6;
              transform: translateY(-1px);
            }
          }
        }
      }
    }
  }

  .listContainer:not(:last-of-type) {
    margin-bottom: 20px;
  }
`;

function Publications() {
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
    <PublicationsContainer $ismobile={isMobile}>
      <div className="title">PUBLICATIONS</div>
      <ul className="heightBox">:)</ul>
    </PublicationsContainer>
  );
}

export default Publications;
