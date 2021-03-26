import styled from "styled-components";

export const SideBarWrapper = styled.div`
  width: 300px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 30px;
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
