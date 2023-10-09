import styled from "styled-components";
import ProfileImg from "../Image/profileImg.png";
import TstoryLogo from "../Image/tstory_logo.png";
import GithubLogo from "../Image/github.png";
import FacebookLogo from "../Image/facebook.png";
import { useMediaQuery } from "react-responsive";

const HeaderContainer = styled.header`
  width: 100%;
  height: 160px;
  margin-bottom: 30px;
  padding: ${(props) => (props.$ismobile ? "0" : "0 5%")};
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
    width: ${(props) => (props.$ismobile ? "80px" : "100px")};
    margin-right: ${(props) => (props.$ismobile ? "" : "30px")};
  }

  .profileContents {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: ${(props) => (props.$ismobile ? "column" : "row")};
    text-align: ${(props) => (props.$ismobile ? "center" : "")};

    .name {
      font-size: ${(props) => (props.$ismobile ? "1.3rem" : "2rem")};
      width: 90%;
      color: #454545;
    }

    .linkContainer {
      display: flex;
      align-items: center;
      width: 60%;
      justify-content: space-between;

      a {
        text-decoration: none;
        color: #454545;
      }

      .link {
        display: flex;
        align-items: center;

        &:hover {
          text-decoration: underline;
        }

        .icon {
          width: ${(props) => (props.$ismobile ? "20px" : "35px")};
          height: ${(props) => (props.$ismobile ? "20px" : "35px")};
          margin-right: 10px;
        }
      }
    }
  }
`;

function Header() {
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  return (
    <HeaderContainer>
      <ProfileContainer $ismobile={isMobile}>
        <img className="profileImg" src={ProfileImg} alt="profileImg" />
        <div className="profileContents">
          <h1 className="name">Jang JaeHoon</h1>
          <div className="linkContainer">
            <a target="_blank" href="https://github.com/leehahoon">
              <div className="github link">
                <img src={GithubLogo} className="icon" alt="GithubLogo" />
                Github
              </div>
            </a>
            <a target="_blank" href="https://leehahoon.tistory.com">
              <div className="blog link">
                <img src={TstoryLogo} className="icon" alt="TstoryLogo" />
                Blog
              </div>
            </a>
            <a target="_blank" href="https://facebook.com/leehahoon1001">
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
