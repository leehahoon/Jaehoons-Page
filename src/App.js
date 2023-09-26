import "./App.css";
import styled from "styled-components";
import Main from "./Pages/Main";
import { useMediaQuery } from "react-responsive";

const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 320px;
`;

function App() {
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });
  return (
    <AppContainer $ismobile={isMobile}>
      <Main />
    </AppContainer>
  );
}

export default App;
