import styled from "styled-components";
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
    margin-left: ${(props) => (props.$ismobile ? "30px" : "")};
    flex-direction: ${(props) => (props.$ismobile ? "column" : "row")};
    color: #7d7d7d;

    a {
      color: #7d7d7d;
      text-decoration: none;
    }

    .info {
      margin-left: 20px;
    }
  }

  .infoContainer:not(:last-of-type) {
    margin-bottom: 10px;
  }

  .copyrightContainer {
    color: #7d7d7d;
    position: absolute;
    bottom: 30px;
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
        <div className="infoContainer">
          E-mail
          <span className="info">leehahoon@gmail.com</span>
        </div>
        <div className="infoContainer">
          Github
          <a
            className="link info"
            target="_blank"
            href="https://github.com/leehahoon"
          >
            https://github.com/leehahoon
          </a>
        </div>
        <div className="infoContainer">
          Blog
          <a
            className="link info"
            target="_blank"
            href="https://leehahoon.tistory.com"
          >
            https://leehahoon.tistory.com
          </a>
        </div>
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
