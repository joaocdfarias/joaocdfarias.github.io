import React, { useEffect, useState } from "react";
import {
  SideBarWrapper,
  AvatarImage,
  Name,
  Title,
  Location,
  Social,
  Email,
  AbilitiesButton,
  AbilitiesWrapper,
} from "./styles";

import { FaLinkedinIn, FaGithub, FaBehance } from "react-icons/fa";

function SideBar() {
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    fetch("https://api.github.com/users/joaocdfarias/repos")
      .then((response) => response.json())
      .then((body) => {
        setAvatar(body[0].owner.avatar_url);
      });
  }, []);

  return (
    <SideBarWrapper>
      <AvatarImage src={avatar} />
      <Name>João Carlos</Name>
      <Title>Desenvolvedor Front-end | UI Designer</Title>
      <div>
        <Location>Salvador, Bahia</Location>
        <Email>
          <a href="mailto:joaocdfariass@gmail.com">joaocdfariass@gmail.com</a>
        </Email>
      </div>
      <div>
        <Social>
          <a href="https://www.github.com/joaocdfarias">
            <FaGithub />
          </a>

          <a href="https://www.behance.net/joaocdfarias">
            <FaBehance />
          </a>

          <a href="https://www.linkedin.com/in/joaocdfarias">
            <FaLinkedinIn />
          </a>
        </Social>
      </div>
      <div>
        <h2>Habilidades</h2>
        <AbilitiesWrapper>
          <AbilitiesButton>JavaScript</AbilitiesButton>
          <AbilitiesButton>ReactJS</AbilitiesButton>
          <AbilitiesButton>NextJS</AbilitiesButton>
          <AbilitiesButton>SQL</AbilitiesButton>
          <AbilitiesButton>NodeJS</AbilitiesButton>
          <AbilitiesButton>Express</AbilitiesButton>
        </AbilitiesWrapper>
      </div>
    </SideBarWrapper>
  );
}

export default SideBar;
