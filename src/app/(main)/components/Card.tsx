import { Description, SubTitle } from '@/common/components';
import { useInView } from 'motion/react';
import React, { PropsWithChildren, ReactElement, useRef } from 'react';
import styled from 'styled-components';

const Container = styled.li<{ delayTime?: number }>`
  border: 1px solid ${({ theme }) => theme.color.line};
  padding: 48px 16px 24px;
  border-radius: ${({ theme }) => theme.radius.medium};
  display: flex;
  flex-direction: column;
  gap: 16px;
  cursor: default;
  animation-delay: ${({ delayTime }) => (delayTime ? `${delayTime}s` : '0s')};
  transition: all 0.2s;

  & > svg {
    font-size: 48px;
    margin-bottom: 8px;
  }
  &:hover {
    border-color: ${({ theme }) => theme.color.description};
    box-shadow: 0px 0px 10px #e1e1e1ce;
  }
  &:hover p {
    color: ${({ theme }) => theme.color.title_sub} !important;
  }
`;
const Label = styled.span`
  display: block;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.color.description};
  font-weight: 800;
`;
interface Props {
  title: string;
  label: string;
  delay?: number;
  icon?: ReactElement;
}

function Card(props: PropsWithChildren<Props>) {
  const { label, title, delay, icon, children } = props;
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: '20px 0px 0px 0px',
  });

  const className = isInView ? 'slide' : '';
  return (
    <Container ref={ref} className={className} delayTime={delay}>
      {icon}
      <SubTitle>
        {title} <Label>{label}</Label>
      </SubTitle>
      <Description>{children}</Description>
    </Container>
  );
}

export default Card;
