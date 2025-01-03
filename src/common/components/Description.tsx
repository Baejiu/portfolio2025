import React from 'react';
import styled from 'styled-components';

const StyledDescription = styled.p<{ $isBlack?: boolean }>`
  font-size: 1rem;
  color: ${({ $isBlack, theme }) =>
    $isBlack ? theme.color.title01 : theme.color.description};

  line-height: 1.4;
  font-weight: 400;
  letter-spacing: -0.05em;
  word-break: keep-all;
`;
interface Props {
  children: React.ReactNode;
  className?: string;
  black?: boolean;
}

function Description({ className, black, children }: Props) {
  return (
    <StyledDescription className={className} $isBlack={black}>
      {children}
    </StyledDescription>
  );
}

export default Description;
