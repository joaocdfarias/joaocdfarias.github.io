import styled from "styled-components";

export const RepoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
  width: 600px;

  a {
    color: white;
    text-decoration: none;
  }

  @media (max-width: 480px) {
    width: 100%;
    flex-direction: column;
    padding: 0 20px;
  }
`;

export const Repo = styled.div`
  background: linear-gradient(90deg, #7211aa 0%, #590d85 100%);
  padding: 20px;
  width: 290px;
  text-align: center;
  border-radius: 5px;
  height: 110px;
  transition: 0.3s;

  :hover {
    box-shadow: 5px 5px 15px -5px #590d85;
    transition: 0.3s;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;
