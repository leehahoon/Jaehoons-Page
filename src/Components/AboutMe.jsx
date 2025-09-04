import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

const AboutMeContainer = styled.section`
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

  .contents {
    display: flex;
    flex-direction: column;
    gap: 20px;

    .text {
      font-size: ${(props) => (props.$ismobile ? "1rem" : "1.1rem")};
      line-height: 26px;
      color: #475569;
      margin: 0;
      word-break: break-word;
      overflow-wrap: break-word;
      hyphens: auto;
    }

    .information {
      font-size: ${(props) => (props.$ismobile ? "0.95rem" : "1rem")};
      line-height: 26px;
      margin: 0;
      padding: ${(props) => (props.$ismobile ? "16px" : "16px 20px")};
      background: #f8fafc;
      border-radius: 8px;
      color: #475569;
      word-break: break-word;
      overflow-wrap: break-word;
      hyphens: auto;
      transition: all 0.2s ease;
      
      &:hover {
        background: #f1f5f9;
        transform: ${(props) => (props.$ismobile ? "none" : "translateX(2px)")};
      }
      
      b {
        color: #475569;
        font-weight: 600;
      }
    }
  }
`;

function AboutMe() {
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  return (
    <AboutMeContainer $ismobile={isMobile}>
      <div className="title">ABOUT ME</div>
      <div className="contents">
        <p className="text">
          I'm interested in program analysis and finding bugs easily.
          <br /> I'll make awe-some program analyzer. Just wait and see.
        </p>
        <p className="information">
          <b>Email</b> : leehahoon1001@gmail.com
        </p>
      </div>
    </AboutMeContainer>
  );
}

export default AboutMe;
