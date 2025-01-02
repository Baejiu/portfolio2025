import React, { useRef } from 'react';
import styled from 'styled-components';
import { FiArrowUpRight, FiArrowUp } from 'react-icons/fi';

const StyledPageContainer = styled.div`
  background-color: ${({ theme }) => theme.color.bg};
  min-height: calc(100vh);
`;
const TopButton = styled.button`
  position: fixed;
  bottom: 80px;
  right: 40px;
  background-color: ${({ theme }) => theme.color.green};
  width: 30px;
  height: 30px;
  font-size: 18px;
  text-align: center;
  padding-top: 3px;
  color: ${({ theme }) => theme.color.white};
  border-radius: ${({ theme }) => theme.radius.round};
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.145),
    0 11px 40px 0 rgba(0, 0, 0, 0.25), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
`;
interface Props {
  children: React.ReactNode;
}

function PageContainer({ children }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <StyledPageContainer ref={ref}>
      {children}
      <TopButton
        onClick={() =>
          ref.current!.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      >
        <FiArrowUp />
      </TopButton>
    </StyledPageContainer>
  );
}

export default PageContainer;
