import { Description, SubTitle } from '@/common/components';
import { useInView } from 'motion/react';
import React, { useRef } from 'react';
import styled from 'styled-components';

interface Props {
  title: string;
  description: string;
}
const Group = styled.div<{ active?: boolean }>`
  position: relative;
  text-align: center;
  transform: ${({ active }) => (active ? `scale(1.02)` : 'scale(1)')};
  transition: all 0.4s;
  padding: 32px 40px;

  max-width: 1280px;
  border-radius: ${({ theme }) => theme.radius.large};
  margin: 20px 0;
  background-color: ${({ active, theme }) =>
    active ? (theme.id == 'dark' ? `#1116` : `#fff8`) : 'none'};

  width: 100%;
  /* &::before {
    border-radius: ${({ theme }) => theme.radius.large};
    transition: all 0.4s;
    top: 10px;
    opacity: 0.8;
    z-index: -1;
    position: absolute;
    display: block;
    left: ${({ active }) => (active ? '0' : '50%')};
    height: 100%;

    content: '';
    width: ${({ active }) => (active ? '100%' : '0px')};
    background-color: ${({ active, theme }) =>
    active ? theme.color.line : theme.color.white};
  } */
`;

function Skill(props: Props) {
  const { title, description } = props;

  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: '-48% 0px -48% 0px',
  });
  return (
    <Group ref={ref} active={isInView || false}>
      <SubTitle>
        {isInView && `🌿 `}
        {title}
        {isInView && ` 🌿`}
      </SubTitle>
      <Description black={isInView || false}>{description}</Description>
    </Group>
  );
}

export default Skill;
