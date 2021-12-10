import styled from "styled-components";
import disenio from "../../img/disenio.png";
import programacion from "../../img/programacion.png";
import hosting from "../../img/hosting.png";

const StyledDiv = styled.div`
  background-color: #f7f7f7;
  padding: 10px 30px 60px 30px;
  margin: 30px 10px;
  text-align: left;
`;

const StyledTitle = styled.h3`
  color: #6425dc;
  font-size: 26px;
  font-weight: 600;
`;
const StyledP = styled.p`
  font-weight: 800;
  margin-left: 20px;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 20px;
`;
const StyledSolution = styled.div`
  width: 100%;
  max-width: 350px;
  border: 1px solid #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin: 10px;
`;
const StyledImg = styled.img`
  width: 50px;
  height: 50px;
`;

const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
`;

const StyledH4 = styled.h4`
  margin: 0 0 10px 0;
`;

const data = [
  {
    src: disenio,
    nombre: "Diseño desde la primera idea",
    descripcion:
      "Ideamos todas las etapas del proyecto hasta llegar al diseño final.",
  },
  {
    src: programacion,
    nombre: "Programacion y codificacion",
    descripcion:
      "Programamos y codificamos todo el sitio con tecnología de avanzada.",
  },
  {
    src: hosting,
    nombre: "Cloud Hosting",
    descripcion:
      "Una vez terminado el proyecto, lo alojamos en los mejores cloud servers.",
  },
];

const StyledSoluciones = () => {
  return (
    <StyledDiv>
      <StyledTitle>Un solo lugar, todas las soluciones:</StyledTitle>
      <StyledP>
        Contamos con un amplio equipo de profesionales dedicados a brindar la
        mejor solución a nuestros clientes.
      </StyledP>
      <StyledContainer>
        {data.map((item, index) => (
          <StyledSolution key={index}>
            <StyledImg alt={item.nombre} src={item.src} />
            <StyledInfo>
              <StyledH4>{item.nombre}</StyledH4>
              {item.descripcion}
            </StyledInfo>
          </StyledSolution>
        ))}
      </StyledContainer>
    </StyledDiv>
  );
};

export default StyledSoluciones;
