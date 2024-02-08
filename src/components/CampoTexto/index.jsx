import search from './search.png';
import styled from 'styled-components';

const ContainerEstilizado = styled.div`
  position: relative;
  display: inline-block;
`;

const CampoTextoEstilizado = styled.input`
  width: 500px;
  height: 50px;
  font-size: 20px;
  font-weight: 400;
  color: #D9D9D9;
  line-height: 20px;
  border: 2px solid;
  margin-right: 30px;
  padding: 12px 16px;
  border-radius: 10px;
  box-sizing: border-box;
  background: transparent;
  border-color: #C98CF1;
`;

const IconLupa = styled.img`
  top: 5px;
  right: 40px;
  width: 38px;
  height: 38px;
  position: absolute;
`;

export const CampoTexto = (props) => {
  return (
    <ContainerEstilizado>
      <CampoTextoEstilizado {...props} placeholder="O que você procura?"/>
      <IconLupa src={search} alt="Ícone de lupa" />
    </ContainerEstilizado>
  )
};
