import React from "react";
import { Title, AboutWrapper } from "./styles";

function About() {
  return (
    <AboutWrapper>
      <Title>Quem sou eu?</Title>
      <p>
        Meu nome é João Carlos, tenho 20 anos, sou desenvolvedor
        front-end/freelancer de Salvador, BA. Trabalho com desenvolvimento a
        pouco mais de 1 ano e utilizo tecnologias com JavaScript, React, Next,
        Express, SQL e WordPress. Trabalho também como UI Designer, responsável
        por criar layouts para sites e aplicativos mobile.
      </p>
    </AboutWrapper>
  );
}

export default About;
