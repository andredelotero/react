import styled from "styled-components";

const StyledCartWidget = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;

  img {
    width: 24px;
    height: 24px;
  }

  ::after {
    padding: ${(props) => (props.cantidad > 0 ? "4px" : "0")};
    width: ${(props) => (props.cantidad > 0 ? "1rem" : "0")};
    height: ${(props) => (props.cantidad > 0 ? "1rem" : "0")};
    display: ${(props) => (props.cantidad > 0 ? "flex" : "none")};
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -15px;
    left: 14px;
    background-color: #ff0000;
    color: white;
    font-weight: 800;
    border-radius: 50%;
    font-size: 0.8rem;
    content: "${(props) => (props.cantidad > 0 ? props.cantidad : "")}";
  }
`;
export default StyledCartWidget;
