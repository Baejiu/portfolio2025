import { Title } from '@/common/components';
import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import styled from 'styled-components';

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
  flex-direction: column;
  gap: 4px;
  margin-bottom: 40px;
  font-size: 1rem;

  border-bottom: 2px dotted ${({ theme }) => theme.color.line};

  & h5 {
    color: ${({ theme }) => theme.color.title01};
  }
  & .date {
    padding-bottom: 16px;
    font-size: 0.8rem;
    color: ${({ theme }) => theme.color.description};
    display: inline-block;
  }
  & li {
    color: ${({ theme }) =>
      theme.id == 'dark' ? theme.color.title_sub : theme.color.description};
    position: relative;
    padding-left: 12px;
    padding-bottom: 8px;
    font-size: 0.8rem;
  }
  & li::before {
    position: absolute;
    top: 6px;
    left: 0;
    width: 4px;
    height: 4px;
    background-color: ${({ theme }) => theme.color.green};
    content: '';
  }

  &:last-child {
    margin-bottom: 0px;
  }
  @media screen and (max-width: 768px) {
    gap: 4px;
    flex-direction: column;
    padding-bottom: 8px;
  }
`;
function ExtraActivities() {
  return (
    <Container>
      <Title>Extra activities.</Title>
      <List>
        <Item>
          <h5>IT시스템공학과</h5>
          <span className="date">2021.03~ 2025.02</span>
          <ul>
            <li>한밭대학교 IT시스템 공학과 학사과정</li>
            <li>
              컴퓨터공학, 소프트웨어공학, 네트워크, 프로그래밍 언어,
              데이터베이스, 빅데이터 분석, 전자공학 기본, IT전문지식
            </li>
          </ul>
        </Item>
        <Item>
          <h5>Team러버덕</h5>
          <span className="date">2021.12~ 2022.03</span>
          <ul>
            <li>
              <a
                href="https://www.youtube.com/channel/UCSc7y5NkMiUTKEygyadjW1w/videos"
                target="_black"
              >
                JavaScript Study
                <FiArrowUpRight />
              </a>
            </li>
            <li>JavaScript 딥다이브, 알고리즘, 자료구조</li>
          </ul>
        </Item>
        <Item>
          <h5>Dream Coding</h5>
          <span className="date">2020~ </span>
          <ul>
            <li>Front End, 개발 스킬 향상</li>
            <li>
              React, Git, JavaScript, 프론트엔드 필수 브라우저 101, TDD,
              Refactoring 등
            </li>
          </ul>
        </Item>
        <Item>
          <h5>Other</h5>
          <ul>
            <li>2024 - 정보처리 기사 필기</li>
            <li>2019 - 대전 세잔IT직업전문학교 웹디자인&퍼블리셔 과정 수료</li>
            <li>2019 - 웹디자인기능사 취득</li>
            <li>2019 - 컴퓨터운용그래픽스기능사 취득</li>
            <li>2019 - 네이버 부스트코스 웹UI개발 수강</li>
          </ul>
        </Item>
      </List>
    </Container>
  );
}

export default ExtraActivities;
