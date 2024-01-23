import styled from 'styled-components';

const HeaderEstilizado = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
`

export const Cabecalho = () => {
    return (
        <HeaderEstilizado>
            <img src="/public/imagens/logo.png" alt="" />
        </HeaderEstilizado>
    )
}