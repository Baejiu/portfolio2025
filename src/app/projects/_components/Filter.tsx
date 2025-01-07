import ProiectService from '@/common/services/projects';
import React from 'react';
import styled from 'styled-components';

const Container = styled.ul`
  display: flex;
  max-width: 1200px;
  width: 100%;
`;
const Category = styled.li<{ selected?: boolean }>`
  cursor: pointer;
  font-size: 1.2rem;
  padding: 8px 20px;
  margin-right: 16px;
  border-radius: 20px;
  transition: all 250ms ease-out;
  background-color: ${({ theme, selected }) =>
    selected ? theme.color.title01 : theme.color.line};
  color: ${({ theme, selected }) =>
    selected ? theme.color.green : theme.color.title01};
`;
interface Props {
  selectFilter?: string;
  onChange: (filter: string) => void;
}

function Filter(props: Props) {
  const { selectFilter, onChange } = props;
  const categories = ProiectService.getCategories();
  return (
    <Container className="slide delay01">
      {categories.map((item) => (
        <Category
          key={item}
          selected={selectFilter == item}
          onClick={() => onChange(item)}
        >
          {item}
        </Category>
      ))}
    </Container>
  );
}

export default Filter;
