import { useCart } from "../../CartContext/CartContext";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../itemListContainer/styles.css";
import "./buttonFinalizar.css";
import { useForm } from "react-hook-form";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  updateDoc,
} from "@firebase/firestore";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const StyledDatosCarrito = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto;
`;

const StyledButtonsForm = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1440px;
  background-color: #f1f1f1;
  padding: 2rem 0 3rem 0;
`;

const StyledButtons = styled.div`
  width: 250px;
`;
const StyledForm = styled.div`
  width: 100%;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  label {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 250px;
    margin: 10px auto;
  }
  .title {
    font-size: 18px;
    margin-bottom: 10px;
    font-weight: 800;
  }
  .boton {
    padding: 0.5rem 2rem;
    background-color: #4466f2;
    color: #fff;
    border-radius: 6px;
    border: 0;
    margin-top: 10px;
    cursor: pointer;
    &:hover {
      background-color: #008600;
    }
  }
`;

const StyledButtonSeguir = styled.button`
  background-color: #4466f2;
  display: block;
  color: #fff;
  cursor: pointer;
  border-radius: 6px;
  padding: 0.5rem 2rem;
  font-size: 14px;
  font-weight: 600;
  border: 0;
  box-shadow: 2px 2px 6px #cecece;
  margin-top: 10px;
  :hover {
    background-color: #008600;
  }
`;

const StyledButtonVaciar = styled.button`
  display: block;
  color: #000;
  cursor: pointer;
  border-radius: 6px;
  padding: 0.5rem 2rem;
  font-size: 14px;
  font-weight: 600;
  border: 1px solid #ff0000;
  box-shadow: 2px 2px 6px #cecece;
  margin-top: 10px;
  :hover {
    background-color: #ff0000;
    color: #fff;
  }
`;

const StyledDetalleCarrito = styled.div`
  width: 90%;
  text-align: center;
  margin: 30px auto;
`;

const StyledProductosCarrito = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 90%;
  max-width: 1200px;
  flex-wrap: wrap;
  margin: 0 auto;
`;

const StyledBox = styled.article`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 25px 5px;
  height: auto;
  background-color: #f1f1f1;
  text-align: center;
`;
const StyledName = styled.p`
  font-size: 18px;
  font-weight: 600;
  margin: 10px 0 0 0;
`;

const StyledDetallePrecio = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  p {
    width: 100%;
    margin: 2px 0;
  }
  .bold {
    font-weight: 800;
  }
`;

const StyledCenteredLoader = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const StyledModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;
  background-color: #008600;
  font-size: 18px;
  width: 350px;
  height: 150px;
  border-radius: 6px;
  padding: 1rem 2rem;
  text-align: center;
`;

//dejar el enCarrito de la base de datos en 0 despues de borrar un item
export const carritoEnCero = (id) => {
  const dbUpdate = getFirestore();
  const productoAModificar = doc(dbUpdate, "items", id);
  updateDoc(productoAModificar, { enCarrito: 0 });
};

const Cart = () => {
  const [loader, setLoader] = useState(false);
  const [modal, setModal] = useState(false);
  const [idCompra, setIdCompra] = useState(0);
  //form
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    sendOrder(data);
  };
  //end form

  const { cart, clear, BorrarProducto, setCart } = useCart();

  const setOrderId = (id) => {
    setIdCompra(id);
    clear();
    setCart([]);
  };

  const sendOrder = (data) => {
    const order = {
      buyer: {
        name: data.name,
        email: data.email,
        phone: data.phone,
      },
      items: cart,
      total: valorTotal,
    };
    setLoader(true);
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order)
      .then(({ id }) => setOrderId(id))
      .finally(() => {
        setLoader(false);
        setModal(true);
      });
  };

  let arrayProd = [];
  let valorTotal = 0;
  if (cart.length > 0) {
    arrayProd = cart.map((el) => el.enCarrito * el.precio);
    valorTotal = arrayProd.reduce((a, b) => a + b);
  }

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
        <StyledDatosCarrito>
          <StyledButtonsForm>
            {modal && (
              <StyledModal>
                <p>Compra realizada con exito!! id de la compra:</p> {idCompra}
              </StyledModal>
            )}
            {cart.length > 0 ? (
              <>
                <StyledButtons>
                  <h3>Productos en carrito: {cart.length}</h3>
                  {` valor total ${valorTotal}`}
                  {<br />}
                  <Link to="/" className="link">
                    <StyledButtonSeguir>seguir comprando</StyledButtonSeguir>
                  </Link>
                  <StyledButtonVaciar onClick={() => clear()}>
                    Vaciar Carrito
                  </StyledButtonVaciar>
                </StyledButtons>
                <StyledForm>
                  <p className="title">
                    Por favor, completa los datos para confirmar la compra
                  </p>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <label>
                      Nombre:
                      <input {...register("name")} required />
                    </label>
                    <label>
                      Email:
                      <input {...register("email")} required />
                    </label>
                    <label>
                      Teléfono:
                      <input {...register("phone")} required />
                    </label>
                    <input
                      type="submit"
                      value="Finalizar compra"
                      className="botonFinalizar"
                    />
                  </form>
                </StyledForm>
              </>
            ) : (
              <>
                <StyledButtons>
                  <h3>carrito vacio</h3>
                  <Link to="/" className="link">
                    <StyledButtonSeguir>seguir comprando</StyledButtonSeguir>
                    <br />
                  </Link>
                </StyledButtons>
              </>
            )}
          </StyledButtonsForm>
          <StyledDetalleCarrito>
            {cart.length > 0 ? (
              <h3>Detalle de los productos agregados al carrito:</h3>
            ) : null}
            <StyledProductosCarrito>
              {cart?.map((productoAgregado) => {
                return (
                  <StyledBox key={productoAgregado.id}>
                    <StyledName>Producto: {productoAgregado.nombre}</StyledName>
                    <StyledDetallePrecio>
                      <p>valor por unidad: {productoAgregado.precio}</p>
                      <p>cantidad agregada: {productoAgregado.enCarrito}</p>
                      <p className="bold">
                        valor total:{" "}
                        {productoAgregado.enCarrito * productoAgregado.precio}
                      </p>
                    </StyledDetallePrecio>
                    <BorrarProducto cantidad={productoAgregado} />
                  </StyledBox>
                );
              })}
            </StyledProductosCarrito>
          </StyledDetalleCarrito>
        </StyledDatosCarrito>
      )}
    </>
  );
};

export default Cart;
