import styled from "styled-components";
import Item from "./Item";
import { useState, useEffect } from "react";
import {
  getDocs,
  collection,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { useParams } from "react-router";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const StyledBox = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 380px;
  margin: 25px auto;
  height: 320px;
  background-color: #e9e9e9;
  text-align: center;
`;

const StyledCenteredLoader = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

function ItemList() {
  const filter = useParams();
  const [loader, setLoader] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    let itemsCollection = [];
    const direccion = filter.categoria;
    if (direccion === undefined) {
      itemsCollection = collection(db, "items");
    } else {
      itemsCollection = query(
        collection(db, "items"),
        where("categoria", "==", filter.categoria)
      );
    }
    getDocs(itemsCollection)
      .then((snapshot) => {
        setData(
          snapshot.docs.map((document) => ({
            id: document.id,
            ...document.data(),
          }))
        );
      })
      .finally(() => {
        setLoader(false);
      });
  }, [filter]);

  return (
    <>
      <StyledCenteredLoader>
        <Loader
          type="Circles"
          color="#6425DC"
          height={100}
          width={100}
          visible={loader}
        />
      </StyledCenteredLoader>
      {data.map((product) => {
        return (
          <StyledBox key={product.id}>
            <Item data={product} />
          </StyledBox>
        );
      })}
    </>
  );
}

export default ItemList;
