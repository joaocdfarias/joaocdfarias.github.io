import styled from "styled-components";

export const Title = styled.h1`
  color: #590d85;
`;

export const AboutWrapper = styled.div`
  margin-top: 20px;
  width: 600px;

  @media (max-width: 480px) {
    width: 100%;
    padding: 10px;
    text-align: center;
  }

  p {
    font-size: 1.1rem;

    @media (max-width: 480px) {
      padding: 10px;
    }
  }
`;
