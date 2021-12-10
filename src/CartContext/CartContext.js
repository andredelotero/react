import { useState, createContext, useContext, useMemo } from "react";

import styled from "styled-components";

import { carritoEnCero } from "../components/cart/Cart";

const StyledButtoms = styled.div`
  :hover {
    background-color: #ff0000;
  }
  display: flex;
  flex-direction: row;
  background-color: #6122d8;
  .container {
    cursor: pointer;
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    align-items: center;
    margin: 0 auto;
    font-size: 18px;
    color: #fff;
    p {
      width: 100%;
    }
    .menos,
    .mas {
      border-radius: 50%;
      width: 30px;
      height: 30px;
      color: #fff;
      border: 0;
      font-size: 18px;
      font-weight: 600;
      cursor: pointer;
    }
    .menos {
      background-color: #aa0000;
    }
    .mas {
      background-color: #009200;
    }
  }
  span {
    margin: 0 auto 10px auto;
    font-weight: 500;
  }
`;

const CartContext = createContext();

export function CartProvider(props) {
  const [cart, setCart] = useState([]);
  const [totalProductos, setTotalProductos] = useState(0);

  const BorrarProducto = (cantidad) => {
    return (
      <>
        <StyledButtoms>
          <div
            className="container"
            onClick={() => borrarItem(cantidad.cantidad.id)}
          >
            <p>borrar producto </p>
          </div>
        </StyledButtoms>
      </>
    );
  };

  const agregarItem = (props) => {
    const id = props[0].id;
    const product = props[0];
    const count = props[1];

    if (buscarDuplicado(id) === undefined) {
      product.enCarrito = count;
      setCart(cart.concat(product));
    } else {
      const result = cart.find((e) => e.id === id);
      result.enCarrito = result.enCarrito + count;
    }
    setTotalProductos(cart.length + 1);
  };

  const borrarItem = (id) => {
    const result = cart.find((e) => e.id === id);
    result.enCarrito = 0;
    const deleted = cart.filter((e) => e.id !== id);
    setCart(deleted);
    setTotalProductos(cart.length - 1);
    carritoEnCero(id);
  };

  const buscarDuplicado = (id) => {
    const existe = cart.find((e) => e.id === id);
    return existe;
  };

  const clear = () => {
    cart.forEach((el) => carritoEnCero(el.id));
    setCart([]);
    setTotalProductos(0);
  };

  const value = useMemo(() => {
    return {
      BorrarProducto,
      totalProductos,
      setTotalProductos,
      cart,
      setCart,
      agregarItem,
      borrarItem,
      buscarDuplicado,
      clear,
    };
    // eslint-disable-next-line
  }, [cart]);

  return <CartContext.Provider value={value} {...props} />;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("error al cargar los datos en CartContext");
  }
  return context;
}
