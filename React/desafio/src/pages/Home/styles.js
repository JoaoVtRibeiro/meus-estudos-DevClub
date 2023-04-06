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

export const Label = styled.label`
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  position: relative;
  right: 130px;
  &[for="pedido"]{
    margin-top: 56px;
  }
  &[for="nome"]{
    margin-top: 32px;
  }
`;

export const Input = styled.input`
  width: 342px;
  height: 58px;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 14px;
  border: none;
  outline: none;
  &::placeholder {
    color: #A9A9A9;
  }
  &#nome{
    margin-bottom: 46px;
  }
  padding-left: 15px;
`;
