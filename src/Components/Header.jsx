import styled from "styled-components";
import ProfileImg from "../Image/profileImg.png";
import TstoryLogo from "../Image/tstory_logo.png";
import GithubLogo from "../Image/github.png";
import FacebookLogo from "../Image/facebook.png";
import { useMediaQuery } from "react-responsive";

const HeaderContainer = styled.header`
  width: 100%;
  height: ${(props) => (props.$ismobile ? "120px" : "160px")};
  margin-bottom: ${(props) => (props.$ismobile ? "0" : "40px")};
  padding: ${(props) => (props.$ismobile ? "0 15px" : "0 5%")};
  background: #ffffff;
  border-bottom: ${(props) => (props.$ismobile ? "none" : "1px solid #e2e8f0")};
  display: flex;
  align-items: center;
  position: relative;
  
  @font-face {
    font-family: "Pretendard-Regular";
    src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
      format("woff");
    font-weight: 400;
    font-style: normal;
  }
  font-family: "Pretendard-Regular";
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;


  .profileImg {
    width: ${(props) => (props.$ismobile ? "70px" : "100px")};
    height: ${(props) => (props.$ismobile ? "70px" : "100px")};
    border-radius: 50%;
    margin-right: ${(props) => (props.$ismobile ? "15px" : "30px")};
    object-fit: cover;
    border: 3px solid #f1f5f9;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .profileContents {
    width: 100%;
    display: flex;
    align-items: ${(props) => (props.$ismobile ? "flex-start" : "center")};
    justify-content: space-between;
    flex-direction: ${(props) => (props.$ismobile ? "column" : "row")};
    text-align: ${(props) => (props.$ismobile ? "left" : "")};
    gap: ${(props) => (props.$ismobile ? "8px" : "0")};
    
    .name {
      font-size: ${(props) => (props.$ismobile ? "1.4rem" : "2.2rem")};
      color: #1e293b;
      font-weight: 600;
      margin: 0;
      letter-spacing: -0.02em;
    }

    .linkContainer {
      display: flex;
      align-items: center;
      width: ${(props) => (props.$ismobile ? "100%" : "60%")};
      justify-content: ${(props) => (props.$ismobile ? "flex-start" : "flex-end")};
      position: ${(props) => (props.$ismobile ? "static" : "absolute")};
      right: ${(props) => (props.$ismobile ? "auto" : "0")};
      bottom: ${(props) => (props.$ismobile ? "auto" : "10px")};
      gap: ${(props) => (props.$ismobile ? "8px" : "0")};

      a {
        text-decoration: none;
        color: #64748b;
        transition: color 0.2s ease;
        
        &:hover {
          color: #3b82f6;
        }
      }

      .link {
        display: flex;
        align-items: center;
        padding: ${(props) => (props.$ismobile ? "4px 8px" : "6px 10px")};
        border-radius: 6px;
        background: #f8fafc;
        border: 1px solid #e2e8f0;
        transition: all 0.2s ease;
        font-size: ${(props) => (props.$ismobile ? "0.8rem" : "0.9rem")};
        font-weight: 500;

        &:hover {
          background: #e0f2fe;
          border-color: #3b82f6;
          transform: translateY(-1px);
        }

        .icon {
          width: ${(props) => (props.$ismobile ? "14px" : "18px")};
          height: ${(props) => (props.$ismobile ? "14px" : "18px")};
          margin-right: ${(props) => (props.$ismobile ? "4px" : "6px")};
          opacity: 0.8;
        }
      }

      .link:not(last-of-type) {
        margin-right: ${(props) => (props.$ismobile ? "0" : "10px")};
      }
    }
  }
`;

function Header() {
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  return (
    <HeaderContainer $ismobile={isMobile}>
      <ProfileContainer $ismobile={isMobile}>
        <img className="profileImg" src={ProfileImg} alt="profileImg" />
        <div className="profileContents">
          <h1 className="name">Jang JaeHoon</h1>
          <div className="linkContainer">
            <a target="_blank" href="https://github.com/leehahoon">
              <div className="github link">
                <img src={GithubLogo} className="icon" alt="GithubLogo" />
                GitHub
              </div>
            </a>
            <a target="_blank" href="https://leehahoon.tistory.com">
              <div className="blog link">
                <img src={TstoryLogo} className="icon" alt="TstoryLogo" />
                Blog
              </div>
            </a>
            <a target="_blank" href="https://facebook.com/leehahoon1001g">
              <div className="facebook link">
                <img src={FacebookLogo} className="icon" alt="GithubLogo" />
                Facebook
              </div>
            </a>
          </div>
        </div>
      </ProfileContainer>
    </HeaderContainer>
  );
}

export default Header;
