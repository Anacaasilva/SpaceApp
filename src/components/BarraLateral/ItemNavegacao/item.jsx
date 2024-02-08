import { styled } from "styled-components";

const ItemListaEstilizado = styled.li`
  font-size: 21px;
  line-height: 29px;
  margin-bottom: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 18px;
  color: ${props => props.$ativo ? '#7B78E5' : '#D9D9D9'};
  font-family: ${props => props.$ativo ? 'GandhiSansBold' : 'GandhiSansRegular'};
`;

export const ItemNavegacao = ({ children, iconeAtivo, iconeInativo, ativo = false }) => {
  return (
    <ItemListaEstilizado $ativo={ativo}>
      <img src={ativo ? iconeAtivo : iconeInativo} alt="" />
      {children}
    </ItemListaEstilizado>
  );
};