import styled from 'styled-components';
import { Banner } from './components/Banner';
import { Galeria } from './components/Galeria';
import bannerBackground from './assets/banner.svg';
import { Cabecalho } from './components/Cabecalho';
import EstilosGlobais from './components/EstilosGlobais';
import { BarraLateral } from './components/BarraLateral';

const FundoGradiente = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(175deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
`

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`

const MainContainer = styled.main`
  gap: 24px;
  display: flex;
`

const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

function App() {

  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho />
        <MainContainer>
          <BarraLateral />
          <ConteudoGaleria>
            <Banner
              texto="A galeria mais completa de fotos do espaço!"
              background={bannerBackground}
            />
            <Galeria />
          </ConteudoGaleria>
        </MainContainer>
      </AppContainer>
    </FundoGradiente>
  )
}

export default App
