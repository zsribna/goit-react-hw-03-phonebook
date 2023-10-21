import styled from "styled-components";

export const List = styled.ul`
  font-size: 18px;
`;
export const Items = styled.li`
  margin-bottom: 5px;
  :last-child{
    margin-bottom: 0;
  }
`;
export const DeleteButton = styled.button`
  margin-left: 15px;
  background-color: #0a0a23;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 5px;
  cursor: pointer;
`;