import { styled } from "styled-components"

const FigureEstilizada = styled.figure`
  margin: 0;
  flex-grow: 1;
  display: flex;
  max-width: 100%;
  min-height: 328px;
  align-items: center;
  border-radius: 20px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: ${ props => `url(${props.background})`};
`

const TituloEstilizado = styled.h1`
  font-size: 40px;
  padding: 0 64px;
  max-width: 300px;
  font-weight: 400;
  color: #FFFFFF;
  line-height: 48px;
`

export const Banner = ({texto, background}) => {
  return (
    <FigureEstilizada background={background}>
      <TituloEstilizado>{texto}</TituloEstilizado>
    </FigureEstilizada>
  )
}