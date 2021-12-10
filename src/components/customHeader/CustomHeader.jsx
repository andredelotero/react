import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  background: linear-gradient(0deg, #4007ab 0%, #6425dc 100%);
  clip-path: polygon(0 0, 100% 0, 100% 80%, 0% 100%);
  width: 100%;
  margin: 65px 0 0 0;
  padding: 50px 0 150px 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  color: #fff;
`;
const StyledH1 = styled.h1`
  font-size: 52px;
  font-weight: 900;
  letter-spacing: 1px;
  line-height: 60px;
  margin: 0;
  text-shadow: 2px 2px 60px black;
`;
const StyledH2 = styled.h2`
  font-size: 22px;
  margin: 30px 0;
  font-weight: 400;
  letter-spacing: 1px;
`;

const StyledDiv = styled.div`
  min-width: 350px;
  max-width: 48%;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const CustomHeader = () => {
  return (
    <StyledHeader>
      <StyledDiv>
        <StyledH1>Hacemos cosas que duermen en internet.</StyledH1>
        <StyledH2>
          Desde el diseño hasta la puesta en marcha de tu sitio web.
        </StyledH2>
      </StyledDiv>
      <StyledDiv>
        <img
          src="https://andredelotero.github.io/ecommerce/img/hero.png"
          alt="imagen"
        />
      </StyledDiv>
    </StyledHeader>
  );
};

export default CustomHeader;
