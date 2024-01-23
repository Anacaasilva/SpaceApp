import styled from 'styled-components';
import { Cabecalho } from './components/Cabecalho';
import EstilosGlobais from './components/EstilosGlobais';

const FundoGradiente = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(175deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
`

function App() {

  return (
    <FundoGradiente>
      <EstilosGlobais />
      <Cabecalho />
    </FundoGradiente>
  )
}

export default App
