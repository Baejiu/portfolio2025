import React from 'react';
import styled from 'styled-components';

const StyledSubTitle = styled.div`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.color.title_sub};
  font-weight: 800;
  text-transform: uppercase;
  font-family: Geist, 'Geist Fallback', Arial, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol';
`;
interface Props {
  children: React.ReactNode;
  className?: string;
}

function SubTitle({ className, children }: Props) {
  return <StyledSubTitle className={className}>{children}</StyledSubTitle>;
}

export default SubTitle;
