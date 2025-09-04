import { styled } from "styled-components";
import { useMediaQuery } from "react-responsive";

const TalksContainer = styled.section`
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

      .talksTitle {
        margin-bottom: 8px;
        font-size: 1.1rem;
        color: #475569;
        font-weight: 600;
      }

      .talksContents {
        list-style-type: none;
        padding: 0;
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
          color: #475569;

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
    margin-bottom: 50px;
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
        "Methodology of Privilege Escalation Vulnerability Analysis",
      contents: [
        "• Stealien Security Seminar",
        "https://youtu.be/6YgSTZ9i7Vk?t=7145",
      ],
    },
    {
      id: 2,
      period: "2021.08",
      title: "KakaoTalk Hooking ",
      contents: [
        "• 23th HackingCamp",
        "http://hackingcamp.org/",
      ],
    },
    {
      id: 3,
      period: "2016.05",
      title: "The Importance of Hardware Security",
      contents: [
        "• Codegate Junior Session",
      ],
    },
  ];

  return (
    <TalksContainer $ismobile={isMobile}>
      <div className="title">PRESENTATIONS</div>
      <ul className="heightBox">
        {talksValue.map((el, index) => {
          return (
            <li key={el.id} className="listContainer">
              <div className="period">{el.period}</div>
              <div className="contentsContainer">
                <div className="talksTitle">
                  {el.title}
                </div>
                <ul className="talksContents">
                  {el.contents.map((el, i) => {
                    return index === 0 && i === 1 ? (
                      <a target="blank_" key={i} className="link" href={el}>
                        • <span className="linkText">YouTube Link </span>
                      </a>
                    ) : index === 1 && i === 1 ? (
                      <a target="blank_" key={i} className="link" href={el}>
                        • <span className="linkText">Link </span>
                      </a>
                    ) : (
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