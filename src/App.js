import "./App.css";
import styled from "styled-components";
import Main from "./Pages/Main";
import Footer from "./Components/Footer";
import { useMediaQuery } from "react-responsive";

const AppContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 100vw;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow-x: hidden;
`;

function App() {
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });
  return (
    <AppContainer $ismobile={isMobile}>
      <Main />
      <Footer />
    </AppContainer>
  );
}

export default App;
