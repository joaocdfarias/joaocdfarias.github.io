import React from "react";
import { RepoWrapper, Repo } from "./styles";

function Repositories() {
  const [repoName, setRepoName] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      const result = await fetch(
        "https://api.github.com/users/joaocdfarias/repos"
      );
      const resultJson = await result.json();
      setRepoName(resultJson);
    }
    fetchData();
  }, []);

  return (
    <RepoWrapper>
      {repoName.map((m) => (
        <a href={m.html_url}>
          <Repo key={m.id}>
            <h2>{m.name}</h2>
            <p> {m.description === null ? "Sem descrição" : m.description} </p>
          </Repo>
        </a>
      ))}
    </RepoWrapper>
  );
}

export default Repositories;
