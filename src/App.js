import { Container } from "./styles";
import { GlobalStyle } from "./GlobalStyle";
import SideBar from "./Components/SideBar";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <SideBar />
        <NavBar />
      </Container>
    </>
  );
}

export default App;
