'use client';
import React, { useState } from 'react';
import PageContainer from '@/common/components/layout/PageContainer';
import { Title } from '@/common/components';
import styled from 'styled-components';
import ProjectList from './_components/ProjectList';
import Filter from './_components/Filter';

const Container = styled.div`
  width: 100vw;
  min-height: calc(100vh - 50px);
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  gap: 60px;
  @media screen and (max-width: 768px) {
    gap: 40px;
  }
`;

function Projects() {
  const [selectFilter, setSelectFilter] = useState<string>('all');

  return (
    <PageContainer>
      <Container>
        <Title className="slide">Projects</Title>
        <Filter
          selectFilter={selectFilter}
          onChange={(filter: string) => setSelectFilter(filter)}
        />
        <ProjectList selectFilter={selectFilter} />
      </Container>
    </PageContainer>
  );
}

export default Projects;
