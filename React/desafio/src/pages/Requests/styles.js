import styled from "styled-components";

export const Container = styled.div`
  display:flex;
  align-items: center;
  flex-direction: column;
`;

export const Figure = styled.figure`
  margin-top: 11px;
  margin-bottom: 25px;
`;
export const Section = styled.section`
  display:flex;
  align-items: center;
  flex-direction: column;
`;

export const ClientList = styled.ul`
  margin-top: 40px;
  margin-bottom: 20px;
`

export const Client = styled.li`
  width: 342px;
  height: 101px;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 14px;
  list-style: none;
  margin-bottom: 18px;
  display: flex;
  flex-direction: row;
  
  flex-wrap: wrap;
  padding: 17px 34px 13px 27px;
  p[id="p-demand"]{
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
    width: 220px;
    order: 1;
  }
  p[id="p-name"]{
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    width: 220px;
    order: 3;
    align-self: flex-end;
  }
  button{
    background: none;
    border: none;
    cursor: pointer;
    align-self: flex-end;
    order: 2;
    margin-left: auto;
    margin-top: 20px;
  }
`