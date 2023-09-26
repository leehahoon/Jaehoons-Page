import styled from "styled-components";
import TstoryLogo from "../Image/tstory_logo.png";
import GithubLogo from "../Image/github.png";
import { useMediaQuery } from "react-responsive";

const FooterContainer = styled.footer`
  margin-top: 50px;
  height: ${(props) => (props.$ismobile ? "120px" : "80px")};
  padding: ${(props) => (props.$ismobile ? "0" : "5%")};
  background-color: rgb(246, 246, 246);
  position: relative;
  display: flex;
  align-items: center;
  @font-face {
    font-family: "Pretendard-Regular";
    src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
      format("woff");
    font-weight: 400;
    font-style: normal;
  }
  font-family: "Pretendard-Regular";

  .linkContainer {
    display: flex;
    justify-content: space-between;
    width: 30%;
    position: absolute;
    bottom: 20px;
    left: 30px;
    flex-direction: ${(props) => (props.$ismobile ? "column" : "row")};

    a {
      color: #454545;
      text-decoration: none;
    }

    .link {
      display: flex;
      align-items: center;
      margin-right: 10px;
      margin-bottom: 5px;
    }

    .icon {
      width: ${(props) => (props.$ismobile ? "20px" : "35px")};
      height: ${(props) => (props.$ismobile ? "20px" : "35px")};
      margin-right: 10px;
    }
  }

  .copyrightContainer {
    color: #454545;
    position: absolute;
    bottom: 20px;
    right: 30px;
  }
`;

function Footer() {
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });
  return (
    <FooterContainer $ismobile={isMobile}>
      <div className="linkContainer">
        <a href="https://naver.com">
          <div className="github link">
            <img src={GithubLogo} className="icon" alt="GithubLogo" />
            Github
          </div>
        </a>
        <a href="https://naver.com">
          <div className="blog link">
            <img src={TstoryLogo} className="icon" alt="TstoryLogo" />
            Blog
          </div>
        </a>
        <a href="https://naver.com">
          <div className="youtube link">
            <img src={TstoryLogo} className="icon" alt="TstoryLogo" />
            Youtube
          </div>
        </a>
      </div>
      <div className="copyrightContainer">
        {isMobile ? (
          <span>ⓒ Jieun.</span>
        ) : (
          <span>Copyright 2023. Jieun. All rights reserved.</span>
        )}
      </div>
    </FooterContainer>
  );
}

export default Footer;
