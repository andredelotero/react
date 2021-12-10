import { NavLink } from "react-router-dom";
import "./StyledCustomMenu.css";
import CartWidget from "../cartWidget/CartWidget";

export default function MenuCustom() {
  return (
    <div className="responsiveMenu">
      <NavLink className="link logo" exact to={"/"}>
        Servícios Informáticos
      </NavLink>
      <ul>
        <li className="CustomLi">
          <NavLink
            className="CustomMenu"
            activeClassName="Active"
            exact
            to={"/"}
          >
            Inicio{" "}
          </NavLink>
        </li>
        <li className="CustomLi">
          <NavLink
            className="CustomMenu"
            activeClassName="Active"
            to={"/category/design"}
          >
            Diseño{" "}
          </NavLink>
        </li>
        <li className="CustomLi">
          <NavLink
            className="CustomMenu"
            activeClassName="Active"
            to={"/category/hosting"}
          >
            Alojamiento
          </NavLink>
        </li>
        <li className="CustomLi">
          <NavLink
            className="CustomMenu"
            activeClassName="Active"
            to={"/category/extra"}
          >
            Extras
          </NavLink>
        </li>
      </ul>
      <CartWidget />
    </div>
  );
}
