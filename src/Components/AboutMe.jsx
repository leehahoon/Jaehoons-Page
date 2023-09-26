import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

const AboutMeContainer = styled.section`
  padding: ${(props) => (props.$ismobile ? "0 15px" : "0 10%")};
  margin-bottom: 80px;
  @font-face {
    font-family: "Pretendard-Regular";
    src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
      format("woff");
    font-weight: 400;
    font-style: normal;
  }
  font-family: "Pretendard-Regular";

  .title {
    border-bottom: 1px solid rgb(236, 236, 235);
    padding-bottom: 10px;
    width: 100%;
    font-size: 1.5rem;
    font-family: "Noto Serif KR", serif;
    margin-bottom: ${(props) => (props.$ismobile ? "10px" : "20px")};
  }

  .contents {
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .information {
      font-size: ${(props) => (props.$ismobile ? "1rem" : "1.2rem")};
      margin: 0;
    }

    .text {
      font-size: ${(props) => (props.$ismobile ? "1rem" : "1.3rem")};
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
