import React from "react";
import { ExperienceApi } from "../../Api/api";
import {
  ExperienceWrapper,
  ExperienceHeader,
  Responsability,
  Description,
} from "./styles";

function Experience() {
  return (
    <div>
      {ExperienceApi.map((m) => {
        return (
          <ExperienceWrapper key={m.id}>
            <ExperienceHeader>
              <h2>{m.company}</h2>
              <h2>|</h2>
              <h2>
                <a href={m.url}>{m.jobName}</a>
              </h2>
            </ExperienceHeader>
            <Responsability>{m.resposability}</Responsability>
            <Description>{m.description}</Description>
          </ExperienceWrapper>
        );
      })}
    </div>
  );
}

export default Experience;
