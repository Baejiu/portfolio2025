import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.div<{ isDark?: boolean }>`
  font-size: 3.2rem;
  color: ${({ isDark, theme }) =>
    isDark ? theme.color.bg : theme.color.title01};
  font-weight: lighter;
  /* font-family: Geist, 'Geist Fallback', Arial, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol'; */

  font-family: 'Lora', serif;
  line-height: 1.2;
  letter-spacing: 0.05em;

  @media screen and (max-width: 768px) {
    font-size: 2.2rem;
  }
`;
interface Props {
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
}

function Title({ dark, className, children }: Props) {
  return (
    <StyledTitle isDark={dark} className={className}>
      {children}
    </StyledTitle>
  );
}

export default Title;
