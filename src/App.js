import "./App.css";
import styled from "styled-components";
import Main from "./Pages/Main";

const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <AppContainer>
      <Main />
    </AppContainer>
  );
}

export default App;
