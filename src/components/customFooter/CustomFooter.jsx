import styled from "styled-components";

const StyledDiv = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem;
  background-color: #000;
  width: 100%;
  height: 150px;
  color: #fff;
  p {
    margin: 0.5rem 0;
  }
`;

const StyledFooter = () => {
  return (
    <StyledDiv>
      <p>2021 Curso React CoderHouse</p>
      <p>André Gama del Otero</p>
    </StyledDiv>
  );
};

export default StyledFooter;
