import styled from "styled-components";

const StyledOnAdd = styled.button`
  background-color: transparent;
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  padding: 1rem;
  border: 0;
  :hover {
    cursor: pointer;
  }
`;

const StyledItemCount = styled.div`
  display: flex;
  flex-direction: column;
  .container {
    display: flex;
    justify-content: space-evenly;
    width: 60%;
    align-items: center;
    margin: 0 auto;
    font-size: 18px;
    color: #000;
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
export { StyledOnAdd };
export default StyledItemCount;
