import NavBar from "./components/navbar/navbar";
import CustomHeader from "./components/customHeader/CustomHeader";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import StyledFooter from "./components/customFooter/CustomFooter";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ItemDetail from "./components/itemListContainer/ItemDetail";
import Cart from "./components/cart/Cart";
import StyledSoluciones from "./components/customSoluciones/CustomSoluciones";

import { CartProvider } from "./CartContext/CartContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <NavBar />
        <CustomHeader />
        <Switch>
          <Route path="/cart" exact>
            <Cart />
          </Route>
          <Route path="/item/:id" exact>
            <ItemDetail />
          </Route>
          <Route path="/category/:categoria">
            <ItemListContainer />
          </Route>
          <Route path="/">
            <StyledSoluciones />
            <ItemListContainer />
          </Route>
        </Switch>
        <StyledFooter />
      </Router>
    </CartProvider>
  );
}

export default App;
