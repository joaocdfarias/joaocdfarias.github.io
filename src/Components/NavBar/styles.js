import styled from "styled-components";

export const NavButton = styled.button`
  background: ${(props) =>
    props.active
      ? "linear-gradient(90deg, #7211aa 0%, #590d85 100%)"
      : "#fafafa"};
  padding: 10px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  color: ${(props) => (props.active ? "white" : "#590d85")};
  font-size: 1.2rem;
  height: 60px;
  cursor: pointer;
  outline: none;
  transition: 0.3s;

  :hover {
    box-shadow: 5px 5px 15px -10px #590d85;
    transition: 0.3s;
  }
`;

export const NavWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 30px;
`;

export const NavContainer = styled.div``;
