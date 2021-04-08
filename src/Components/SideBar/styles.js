import styled from "styled-components";

export const SideBarWrapper = styled.div`
  width: 300px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 30px;

  @media (max-width: 480px) {
    height: auto;
    text-align: center;
    align-items: center;
    width: 100%;
  }
`;

export const AvatarImage = styled.img`
  border-radius: 100%;
  width: 200px;
`;

export const Name = styled.h1`
  font-size: 3rem;
  line-height: 0.9em;
`;
export const Title = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: #2b2b2b;
`;

export const Location = styled.p`
  color: #2b2b2b;
`;

export const Social = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  svg {
    font-size: 1.5rem;
    color: #000000;
  }

  svg:hover {
    color: #7211aa;
  }
`;

export const Email = styled.div`
  a {
    color: #2b2b2b;
    background: #f1f1f1;
    text-decoration: none;
    width: 90%;
    padding: 2px;
    border-radius: 5px;
  }

  a:hover {
    color: #7211aa;
  }
`;

export const AbilitiesButton = styled.p`
  background: linear-gradient(90deg, #7211aa 0%, #590d85 100%);
  font-weight: bold;
  padding: 10px;
  color: white;
  border-radius: 5px;
  max-width: 100%;
`;

export const AbilitiesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;

  @media (max-width: 480px) {
    justify-content: center;
    width: 100%;
    padding: 0 70px;
  }
`;
