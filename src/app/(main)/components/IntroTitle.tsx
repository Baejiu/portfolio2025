import { Title } from '@/common/components';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div<{ open?: boolean }>`
  width: 100%;
  height: fit-content;
  position: relative;
  overflow: hidden;
  padding-bottom: 20px;
  &.open > div {
    top: 0;
  }
`;

const ShowUpTitle = styled(Title)`
  animation: showUpText 5s cubic-bezier(0.17, 1.04, 1, 0.98) infinite;
  word-wrap: none;

  transition: all 0.8s ease-in;
`;
interface Props {
  title: string;
  className?: string;
}

function IntroTitle({ title, className }: Props) {
  return (
    <Container className={className}>
      <ShowUpTitle>{title}</ShowUpTitle>
    </Container>
  );
}

export default IntroTitle;
