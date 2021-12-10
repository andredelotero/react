import styled from "styled-components";

import ItemList from "./ItemList";

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  max-width: 1360px;
  margin: 25px auto;
  justify-content: space-between;
  align-items: center;
`;

const ItemListContainer = () => {
  return (
    <StyledContainer>
      <ItemList />
    </StyledContainer>
  );
};

export default ItemListContainer;
