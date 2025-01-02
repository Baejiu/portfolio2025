import { Description, SubTitle, Title } from '@/common/components';
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

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

const ProfileSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  min-height: 500px;
  gap: 40px;
  @media screen and (max-width: 768px) {
    flex-direction: column;

    margin: 0;
    align-items: flex-start;

    justify-content: flex-start;
    height: fit-content;
  }
`;

const Profile = styled.div`
  width: 100%;
  height: fit-content;
  min-width: 320px;
  max-width: 420px;
  position: relative;
  aspect-ratio: 9 / 12;

  & img {
    width: 100%;
    position: relative;
    aspect-ratio: 9 / 12;
    object-fit: cover;
    height: initial !important;

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
    border: 2px dashed ${({ theme }) => theme.color.line};
  }

  @media screen and (max-width: 768px) {
    // max-width: 320px;

    & img {
      // width: 100%;
      // height: 100%;
    }
  }
`;
const Contents = styled.div``;
function AboutMe() {
  return (
    <Container>
      <Title>About me.</Title>
      <ProfileSection>
        <Profile>
          <Image
            src="/assets/images/profile.jpg"
            alt="baejiu's portfolio"
            fill
          />
        </Profile>
        <Contents>
          <SubTitle>안녕하세요. 만나서 반갑습니다.</SubTitle>
          <Description>
            <br />
            어려운 문제를 분할과 정복 기법으로 풀어 나가는걸 즐기는 개발자
            배지우입니다. <br />
            <br />
            작동 원리에 대한 이해의 갈망으로 Javascript, React를 독학하고,
            전문가로 성장하기 위해 IT시스템공학 전공을 병행했습니다. 4년 동안
            CS지식, 네트워크, 데이터베이스 등 전공 지식을 습득했습니다.
            <br />
            <br />
            마라톤의 페이스메이커를 아시나요? <br />
            일과 학업을 병행하는 4년 동안 끝이 보이지 않는 마라톤을 달린 것
            같습니다. 힘들고 지칠 때도 있었지만, 지나고 보니 어떤 프로젝트에서도
            끝까지 갈 수 있겠다는 마음이 듭니다.
            <br />
            <br /> 회사가 추구하는 목표 달성까지 함께 가는 개발자로 성장하고자
            합니다.
          </Description>
        </Contents>
      </ProfileSection>
    </Container>
  );
}

export default AboutMe;
