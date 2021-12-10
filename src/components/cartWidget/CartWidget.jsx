import StyledCartWidget from "./StyledCartWidget";
import { Link } from "react-router-dom";
import { useCart } from "../../CartContext/CartContext";
import "../itemCount/styles.css";
import cart from "../../img/cart.png";

const CartWidget = (props) => {
  const { totalProductos } = useCart();

  return (
    <StyledCartWidget cantidad={parseInt(totalProductos)}>
      {totalProductos > 0 ? (
        <Link to="/cart" className="link">
          <img src={cart} alt="" />
        </Link>
      ) : (
        ""
      )}
    </StyledCartWidget>
  );
};

export default CartWidget;
