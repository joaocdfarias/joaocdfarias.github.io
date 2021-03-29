import React from "react";
import { NavButton, NavWrapper, NavContainer } from "./styles";
import Repositories from "../Repositories";
import Experience from "../Experience";
import About from "../About";

function NavBar() {
  const [tabs, setTabs] = React.useState(1);

  function changeTabs(index) {
    setTabs(index);
  }

  return (
    <div>
      <NavContainer>
        <NavWrapper>
          <NavButton active={tabs === 1} onClick={() => changeTabs(1)}>
            Sobre mim
          </NavButton>
          <NavButton active={tabs === 2} onClick={() => changeTabs(2)}>
            Experiência
          </NavButton>
          <NavButton active={tabs === 3} onClick={() => changeTabs(3)}>
            Projetos
          </NavButton>
        </NavWrapper>
      </NavContainer>
      {tabs === 1 ? <About /> : null}
      {tabs === 2 ? <Experience /> : null}
      {tabs === 3 ? <Repositories /> : null}
    </div>
  );
}

export default NavBar;
