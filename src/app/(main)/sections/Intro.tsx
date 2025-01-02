import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Description } from '@/common/components';
import Image from 'next/image';
import IntroTitle from '../components/IntroTitle';

const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 100px);
  padding-right: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

  gap: 40px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 24px 24px 0;
    margin: 0;
    align-items: flex-start;

    gap: 40px;

    height: auto;
    min-height: calc(100vh - 50px);
  }
`;
const Visual = styled.div`
  flex-shrink: 0;

  max-width: 460px;
  width: 100%;
  height: 320px;
  position: relative;

  & img {
    border-radius: ${({ theme }) => theme.radius.medium};
  }
  &:before {
    display: block;
    position: absolute;
    top: 10px;
    left: 10px;
    border-radius: ${({ theme }) => theme.radius.medium};
    width: 100%;
    height: 100%;
    content: '';
    border: 1px solid ${({ theme }) => theme.color.green};
  }
  @media screen and (max-width: 460px) {
    width: 320px;

    & img {
      width: 100%;
    }
  }
`;
const Contents = styled.div`
  flex-basis: 1;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  max-width: 800px;
  gap: 24px;
`;
const ScrollIcon = styled.span<{ $visible: boolean }>`
  width: 40px;
  height: 40px;
  content: '';
  position: fixed;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  background: url('./assets/icons/scroll.png');
  background-repeat: no-repeat;
  background-size: contain;
  transition: opacity 0.4s;
  animation: bounse 1.2s cubic-bezier(0, 0, 0.18, 0.99) infinite;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
`;

function Intro() {
  const introRef = useRef(null);
  const [showScrollButton, setShowScrollButton] = useState(true);
  const handleScroll = useCallback(([entries]: IntersectionObserverEntry[]) => {
    if (entries.isIntersecting) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  }, []);

  useEffect(() => {
    let observer: IntersectionObserver;

    if (introRef.current) {
      observer = new IntersectionObserver(handleScroll, { threshold: 1 });
      observer.observe(introRef.current);
    }

    return () => observer && observer.disconnect();
  }, [handleScroll]);

  return (
    <>
      <Container ref={introRef}>
        <Visual className="slide delay01">
          <Image
            src="/assets/images/intro_image.jpg"
            alt="baejiu's portfolio"
            fill
          />
        </Visual>
        <Contents>
          <IntroTitle
            title={'Front-end Developer.'}
            className="slide delay02"
          />
          <Description className="slide delay03">
            안녕하세요. 만나서 반갑습니다.
            <br />
            <br />
            4년차 Front-end 개발자 배지우입니다. 문제 해결, 사용자 중심 요구
            사항 분석, 우선 순위 지정과 프로젝트 일정을 효율적이게 구성하는 것에
            열정적입니다.
            <br />
            <br />
            React, Next.js, Flutter 를 이용해 랜딩 사이트, 어드민 페이지, 디자인
            시스템, 앱 개발에 참여했습니다.
          </Description>
        </Contents>
      </Container>
      <ScrollIcon $visible={showScrollButton} />
    </>
  );
}

export default Intro;
