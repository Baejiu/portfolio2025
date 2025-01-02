import React from 'react';
import styled from 'styled-components';
import { Title } from '@/common/components';
import Card from '../components/Card';
import {
  FcClock,
  FcCollaboration,
  FcScatterPlot,
  FcFlowChart,
  FcMultipleDevices,
  FcTodoList,
} from 'react-icons/fc';

const Container = styled.div`
  width: 100vw;
  min-height: calc(100vh - 50px);
  padding: 120px 0 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: fit-content;
  max-width: 1200px;
  margin: 0 auto;
  gap: 60px;
`;

const CardList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 28px;
  padding: 0 20px;
  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 28px;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 28px;
  }
`;

function Features() {
  return (
    <Container>
      <Title>Special Features.</Title>
      <CardList>
        <Card
          title="디자인 시스템"
          label="Design System"
          icon={<FcMultipleDevices />}
        >
          디자이너와의 협업. 공통으로 사용하는 font, color, layout, UI 구성 요소
          의 규칙 정의해 사이트를 체계적이게 구축합니다. 반복되는 작업을 줄여
          개발 및 유지보수 속도가 향상됩니다.
        </Card>
        <Card
          title="컴포넌트 구현"
          label="Component factor"
          delay={0.2}
          icon={<FcFlowChart />}
        >
          공통 컴포넌트 구현 및 작은 단위의 컴포넌트를 조합하여 코드의 효율성을
          높힙니다. 무거운 라이브러리가 아닌 필요한 기능의 컴포넌트를 개발해
          프로젝트의 복잡도를 줄입니다.
        </Card>
        <Card
          title="작업 설계"
          label="Task design"
          delay={0.4}
          icon={<FcTodoList />}
        >
          구현 전 컴포넌트와 기능 산출, 개발 진행 순서 파악, 필수 테스트 등을
          산정하여 태스크를 설계합니다. 이를 통해 착수 전 작업에 대한 이해도
          상승 및 문서 공유로 기능 누락, 소통의 오류가 감소합니다.
        </Card>
        <Card
          title="요구사항 분석"
          label="Requirements Analysis"
          icon={<FcCollaboration />}
        >
          요구사항 설계 및 싱크업 미팅을 통해 기존 요구사항과의 충돌 파악, 개발
          가이드 문서를 작성하여 공유할 수 있습니다. 팀원 간의 이해도 상승으로
          구현 이후 발생하는 휴먼 에러를 줄일 수 있습니다.
        </Card>
        <Card
          title="일정 관리"
          label="Schedule communication"
          delay={0.2}
          icon={<FcClock />}
        >
          태스크 디자인, 요구사항 분석을 통해 기존 작업물을 토대로 일정을
          산정합니다. 이해관계자와의 일정 조율 시 구체적인 근거를 토대로
          소통하게 됩니다.
        </Card>
        <Card
          title="유지보수"
          label="Maintenance work"
          delay={0.4}
          icon={<FcScatterPlot />}
        >
          성능 향상을 위한 리팩토링, 중요 로직에 대한 문서화, 테스트 코드 추가
          작업을 진행합니다. 구글 애널리틱스를 통해 유입량 및 유저 플로우를
          추적하고, A/B 테스트로 기업의 방향성 의사결정에 유의미한 정보를
          제공합니다.
        </Card>
      </CardList>
    </Container>
  );
}

export default Features;
