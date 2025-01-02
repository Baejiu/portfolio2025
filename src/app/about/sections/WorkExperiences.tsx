import React, { useRef } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { Title } from '@/common/components';
import { FiArrowUpRight } from 'react-icons/fi';
import { useInView } from 'motion/react';

const Container = styled.div`
  width: 100vw;
  min-height: calc(100vh - 50px);
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: fit-content;
  max-width: 1200px;
  margin: 0 auto;
  gap: 60px;
  @media screen and (max-width: 768px) {
    gap: 40px;
  }
`;
const List = styled.ul`
  width: 100%;
`;
const Item = styled.li`
  display: flex;
  flex-direction: row;
  gap: 24px;
  margin-bottom: 40px;

  &:last-child {
    margin-bottom: 0px;
  }
  @media screen and (max-width: 768px) {
    gap: 16px;
    flex-direction: column;
    padding-bottom: 8px;
    border-bottom: 4px dotted ${({ theme }) => theme.color.line};
  }
`;
const Logo = styled.div`
  border: 1px solid ${({ theme }) => theme.color.line};
  height: fit-content;
  width: fit-content;
  padding: 8px;
  border-radius: ${({ theme }) => theme.radius.medium};
  background-color: ${({ theme }) => theme.color.white};
`;
const Contents = styled.div`
  & h5 {
    font-size: 1rem;
    color: ${({ theme }) => theme.color.title01};
  }

  & .date {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.color.description};
    padding-bottom: 8px;
    display: inline-block;
  }
  & .item {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 2px 0;
  }
  & p,
  & li {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.color.description};
  }
  & li {
    display: inline-block;
    background-color: ${({ theme }) =>
      theme.id == 'dark' ? theme.color.title_sub : theme.color.lightGreen};
    margin: 0 4px 4px 0;
    padding: 4px 12px;
    border-radius: ${({ theme }) => theme.radius.large};
  }
  & li:nth-child(2n) {
    background-color: ${({ theme }) => theme.color.line};
  }
  & .label {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.color.title_sub};
  }
  @media screen and (max-width: 768px) {
    & .item {
      flex-direction: column;
      align-items: flex-start;
      gap: 4px;
    }
  }
`;

function WorkExperiences() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: '-100px 0px -100px 0px',
  });
  return (
    <Container ref={ref}>
      <Title className={isInView ? 'slide' : ''}>Work Experiences.</Title>
      <List className={isInView ? 'slide delay01' : ''}>
        <Item>
          <Logo>
            <Image
              src="/assets/images/lucentblock_logo.jpeg"
              alt="lucentblock_logo"
              width={80}
              height={80}
            />
          </Logo>
          <Contents>
            <h5>
              <a href="https://sou.place/" target="_black">
                루센트블록
                <FiArrowUpRight />
              </a>
            </h5>
            <span className="date">2022.03 ~ 2024.07</span>
            <p className="item">
              <span className="label">about: </span>블록체인 기반 부동산
              수익증권 유통 플랫폼
            </p>
            <p className="item">
              <span className="label">role: </span>프론트엔드(Web, App)
            </p>
            <div className="item">
              <span className="label">projects: </span>
              <ul>
                <li>코리빙 랜딩 페이지</li>
                <li>사업 랜딩 페이지</li>
                <li>온라인 예약 사이트</li>
                <li>Admin 개발</li>
                <li>App 기능 개발</li>
              </ul>
            </div>
          </Contents>
        </Item>
        <Item>
          <Logo>
            <Image
              src="/assets/images/goodcare_logo.jpg"
              alt="goodcare_logo"
              width={80}
              height={80}
            />
          </Logo>
          <Contents>
            <h5>
              <a href="http://goodcare.me/" target="_black">
                주식회사 굿케어
                <FiArrowUpRight />
              </a>
            </h5>
            <span className="date">2020.01 ~ 2022.03</span>
            <p className="item">
              <span className="label">about: </span>약 1,700 개의 복지시설에서
              사용하는 회계프로그램을 제공하는 Saas 기업
            </p>
            <p className="item">
              <span className="label">role: </span>프론트엔드(Web), 웹디자인,
              웹기획
            </p>
            <div className="item">
              <span className="label">projects: </span>
              <ul>
                <li>굿케어 솔루션 프로그램 개발</li>
                <li>공식 웹사이트</li>
                <li>로켓회계 사이트 개발</li>
              </ul>
            </div>
          </Contents>
        </Item>
      </List>
    </Container>
  );
}

export default WorkExperiences;
