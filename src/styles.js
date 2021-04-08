import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  display: flex;
  gap: 20px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;
