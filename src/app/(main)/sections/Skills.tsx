import React, { useCallback, useRef } from 'react';
import styled, { useTheme } from 'styled-components';
import { Title } from '@/common/components';

import Skill from '../components/Skill';
import { useInView } from 'motion/react';

const Container = styled.div`
  width: 100vw;
  min-height: calc(100vh - 50px);
  padding: 120px 40px;
  text-align: center;
  background: ${({ theme }) =>
    theme.id == 'dark' ? theme.color.green : theme.color.lightGreen};

  @media screen and (max-width: 768px) {
  }
`;
const Deco = styled.div`
  width: 100%;

  display: flex;
  align-items: flex-end;
  justify-content: end;
  & svg {
    width: 100%;
    height: fit-content;
  }
`;
const BottomDeco = styled.div`
  width: 100%;

  display: flex;
  align-items: flex-end;
  justify-content: end;
  background: ${({ theme }) =>
    theme.id == 'dark' ? theme.color.green : theme.color.lightGreen};

  & svg {
    width: 100%;
    height: fit-content;
  }
`;
const Contents = styled.div`
  padding-top: 40px;
  margin: 0 auto;
  width: fit-content;
`;

function Skills() {
  const theme = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: '-100px 0px -100px 0px',
  });

  const decoColorCode = useCallback(() => {
    if (theme.id === 'dark') {
      return {
        deco1: '#6e6e73',
        deco2: '#E9E8EC',
        deco3: '#49E2AC',
        deco4: '#111111',
      };
    } else {
      return {
        deco1: '#F5F5F5',
        deco2: '#EAEAEA',
        deco3: '#EAF4E7',
        deco4: '#ffffff',
      };
    }
  }, [theme.id]);
  return (
    <>
      <Deco>
        <svg
          width="1920"
          height="108"
          viewBox="0 0 1920 108"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 107.572C0 107.572 521.5 93.0722 859.5 65.5722C1197.5 38.0722 1257 -1.92782 1550 0.0721817C1843 2.07218 1920 27.5722 1920 27.5722V107.572H0Z"
            fill={decoColorCode().deco1}
          />
          <path
            d="M0 107.572C0 107.572 521.5 93.0722 859.5 65.5722C1197.5 38.0722 1257 -1.92782 1550 0.0721817C1843 2.07218 1920 27.5722 1920 27.5722V107.572H0Z"
            fill={decoColorCode().deco1}
          />
          <rect y="58" width="1920" height="50" fill={decoColorCode().deco2} />
          <path d="M0 8L1920 108H0V8Z" fill={decoColorCode().deco3} />
        </svg>
      </Deco>
      <Container ref={ref}>
        <Title className={isInView ? 'slide' : ''}>Skills.</Title>
        <Contents className={isInView ? 'slide delay01' : ''}>
          <Skill
            title="main"
            description=" React, Next.js, JavaScript, TypeScript, Flutter"
          />
          <Skill title="sub" description="Python, Node.js, Java, C, SQL" />
          <Skill
            title="tools"
            description=" VScode, Git, Figma, Storybook, Jira, Confluence, Slack, AWS, Netlify, Excel,
          Diagram, Google analytics"
          />
          <Skill
            title="other"
            description=" Restful API, Responsive, Design System, Component factor, Refectering,
          SEO, Testing, React-Query, Context, Dom, Accessibility, + Style
          library anything"
          />
        </Contents>
      </Container>
      <BottomDeco>
        <svg
          width="1920"
          height="108"
          viewBox="0 0 1920 108"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 8L1920 108H0V8Z" fill={decoColorCode().deco2} />
          <rect y="58" width="1920" height="50" fill={decoColorCode().deco1} />
          <path
            d="M0 107.572C0 107.572 521.5 93.0722 859.5 65.5722C1197.5 38.0722 1257 -1.92782 1550 0.0721817C1843 2.07218 1920 27.5722 1920 27.5722V107.572H0Z"
            fill={decoColorCode().deco4}
          />
          <path
            d="M0 107.572C0 107.572 521.5 93.0722 859.5 65.5722C1197.5 38.0722 1257 -1.92782 1550 0.0721817C1843 2.07218 1920 27.5722 1920 27.5722V107.572H0Z"
            fill={decoColorCode().deco4}
          />
        </svg>
      </BottomDeco>
    </>
  );
}

export default Skills;
