import { Tags } from './Tags';
import { Titulo } from '../Titulo';
import { Populares } from './Populares';
import { styled } from 'styled-components';

const GaleriaContainer = styled.div`
  display: flex;
`

const SecaoFluida = styled.section`
  flex-grow: 1;
`

export const Galeria = () => {
  return (
    <>
      <Tags />
      <GaleriaContainer>
          <SecaoFluida>
            <Titulo>Navegue pela galeria</Titulo>
          </SecaoFluida>
          <Populares />
      </GaleriaContainer>
    </>
  )
}