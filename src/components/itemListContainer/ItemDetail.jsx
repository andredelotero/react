import { useParams } from "react-router";
import ItemCount from "../itemCount/ItemCount";
import styled from "styled-components";
import { useState, useEffect } from "react";

import { useCart } from "../../CartContext/CartContext";
import { Link } from "react-router-dom";

import { doc, getDoc, getFirestore, updateDoc } from "firebase/firestore";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const StyledName = styled.h4`
  font-size: 24px;
  margin: 0;
`;
const StyledDescription = styled.p`
  margin: 20px;
  font-weight: 400;
`;
const StyledPrecio = styled.p`
  font-size: 18px;
  font-weight: 800;
  margin: 10px;
`;
const StyledImg = styled.img`
  width: auto;
  height: 150px;
  padding: 20px 0;
`;
const StyledStock = styled.p`
  font-weight: 400;
  margin: 0;
`;
const StyledBox = styled.article`
  display: flex;
  flex-direction: column;
  width: 380px;
  margin: 25px auto;
  height: auto;
  background-color: #f1f1f1;
  text-align: center;
`;
const StyledCenteredLoader = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const StyledFinalizar = styled.button`
  width: 100%;
  margin-top: 20px;
  font-size: 18px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #6122d8;
  color: #fff;
  border: 0;
  height: 55px;
  text-decoration: none;
  &:hover {
    background-color: #0000ff;
  }
`;

const ItemDetail = () => {
  const [loader, setLoader] = useState(true);
  const { agregarItem } = useCart();

  function AddHandler(props) {
    agregarItem(props);
    const dbUpdate = getFirestore();
    const productoAModificar = doc(dbUpdate, "items", props[0].id);
    updateDoc(productoAModificar, { enCarrito: props[1] });
  }
  const { id } = useParams();

  const [data, setData] = useState({});

  useEffect(() => {
    const db = getFirestore();

    const productoSeleccionado = doc(db, "items", id);
    getDoc(productoSeleccionado)
      .then((snapshot) => {
        setData({ id: snapshot.id, ...snapshot.data() });
      })
      .finally(() => {
        setLoader(false);
      });
  }, [id]);

  const { src, nombre, descripcion, precio, stock, enCarrito } = data;
  return (
    <>
      {loader ? (
        <StyledCenteredLoader>
          <Loader
            type="Circles"
            color="#6425DC"
            height={100}
            width={100}
            visible={loader}
          />
        </StyledCenteredLoader>
      ) : (
        <StyledBox>
          <StyledImg src={src} alt={nombre} />
          <StyledName>{nombre}</StyledName>
          <StyledDescription>{descripcion}</StyledDescription>
          <StyledPrecio>
            Valor unitario: {precio}
            {<br></br>}
          </StyledPrecio>
          <StyledStock>
            Stock disponible: {stock - enCarrito} en carrito: {enCarrito}
          </StyledStock>
          {enCarrito > 0 ? (
            <Link to="/cart">
              <StyledFinalizar>Finalizar mi compra</StyledFinalizar>
            </Link>
          ) : (
            <ItemCount stock={stock} initial="1" onAdd={AddHandler} data={data}>
              {precio}
            </ItemCount>
          )}
        </StyledBox>
      )}
    </>
  );
};

export default ItemDetail;
