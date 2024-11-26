import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.div`
  font-size: 20px;
`;
interface Props {
  children: React.ReactNode;
}

function Title({ children }: Props) {
  return <StyledTitle>{children}</StyledTitle>;
}

export default Title;
