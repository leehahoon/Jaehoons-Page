import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

const FooterContainer = styled.footer`
  padding: ${(props) => (props.$ismobile ? "40px 15px" : "60px 56px")};
  background: ${(props) => (props.$ismobile ? "#f8fafc" : "#ffffff")};
  position: relative;
  width: 100%;
  
  @font-face {
    font-family: "Pretendard-Regular";
    src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
      format("woff");
    font-weight: 400;
    font-style: normal;
  }
  font-family: "Pretendard-Regular";

  .footerContent {
    max-width: 1800px;
    margin: 0 auto;
    display: flex;
    flex-direction: ${(props) => (props.$ismobile ? "column" : "row")};
    justify-content: space-between;
    align-items: ${(props) => (props.$ismobile ? "flex-start" : "flex-end")};
    gap: ${(props) => (props.$ismobile ? "20px" : "40px")};
  }

  .linkContainer {
    display: flex;
    flex-direction: column;
    gap: 12px;
    
    .infoContainer {
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 0.95rem;
      color: #475569;
      
      .label {
        font-weight: 600;
        color: #1e293b;
        min-width: 60px;
      }
      
      .info {
        color: #64748b;
        text-decoration: none;
        padding: 4px 8px;
        border-radius: 4px;
        background: #f8fafc;
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

  .copyrightContainer {
    color: #64748b;
    font-size: 0.9rem;
    text-align: ${(props) => (props.$ismobile ? "left" : "right")};
  }
`;

function Footer() {
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });
  return (
    <FooterContainer $ismobile={isMobile}>
      <div className="footerContent">
        <div className="linkContainer">
          <div className="infoContainer">
            <span className="label">E-mail</span>
            <a href="mailto:leehahoon1001@gmail.com" className="info">
              leehahoon1001@gmail.com
            </a>
          </div>
          <div className="infoContainer">
            <span className="label">GitHub</span>
            <a
              className="info"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/leehahoon"
            >
              github.com/leehahoon
            </a>
          </div>
          <div className="infoContainer">
            <span className="label">Blog</span>
            <a
              className="info"
              target="_blank"
              rel="noopener noreferrer"
              href="https://leehahoon.tistory.com"
            >
              leehahoon.tistory.com
            </a>
          </div>
        </div>
        <div className="copyrightContainer">
          {isMobile ? (
            <span>ⓒ 2023 Jieun. All rights reserved.</span>
          ) : (
            <span>Copyright 2023. Jieun. All rights reserved.</span>
          )}
        </div>
      </div>
    </FooterContainer>
  );
}

export default Footer;
