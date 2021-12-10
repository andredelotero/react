import styled from "styled-components";
import { Link } from "react-router-dom";
import "./styles.css";
const StyledName = styled.h4`
  font-size: 24px;
  margin: 0;
`;
const StyledDescription = styled.p`
  margin: 20px;
  font-weight: 400;
`;

const StyledImg = styled.img`
  width: auto;
  height: 150px;
  padding: 20px 0;
`;

const StyledVerMas = styled.button`
  background-color: #3c04a5;
  width: 100%;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  padding: 1rem;
  border: 0;
  :hover {
    background-color: #200355;
  }
`;

function ItemDetailContainer({ data }) {
  return (
    <>
      <StyledImg src={data.src} alt={data.nombre} />
      <StyledName>{data.nombre}</StyledName>
      <StyledDescription>{data.descripcion}</StyledDescription>
      <Link className="link" to={`/item/${data.id}`}>
        <StyledVerMas>Ver mas</StyledVerMas>
      </Link>
    </>
  );
}

export default ItemDetailContainer;
