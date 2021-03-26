import { Container } from "./styles";
import { GlobalStyle } from "./GlobalStyle";
import SideBar from "./Components/SideBar";

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <SideBar />
      </Container>
    </>
  );
}

export default App;
