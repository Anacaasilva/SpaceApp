import tags from './tags.json';
import { styled } from 'styled-components';

const TagsContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 64px;
  margin-top: 56px;
`

const TagTitulo = styled.h3`
  color: #D9D9D9;
  font-size: 22px;
  margin: 0;
`

const Div = styled.div`
  display: flex;
  justify-content: end;
  gap: 24px;
`

const Tag = styled.button`
  font-size: 22px;
  color: #FFFFFF;
  background: rgba(217, 217, 217, 0.3);
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  padding: 10px;
  box-sizing: border-box;
  border: 2px solid transparent;
  &:hover {
    border-color: #C98CF1;
  }
`

export const Tags = () => {
  return (
    <TagsContainer>
      <TagTitulo>Busque por tags:</TagTitulo>
      <Div>
        {tags.map(tag => <Tag key={tag.id}>{tag.titulo}</Tag>)}
      </Div>
    </TagsContainer>
  )
}