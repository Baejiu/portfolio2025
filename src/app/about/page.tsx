'use client';
import React from 'react';
import PageContainer from '@/common/components/layout/PageContainer';
import styled from 'styled-components';
import { Title } from '@/common/components';
import { FiArrowUpRight } from 'react-icons/fi';
import AboutMe from './sections/AboutMe';
import WorkExperiences from './sections/WorkExperiences';
import ExtraActivities from './sections/ExtraActivities';

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
`;
const HistorySection = styled.div``;

function About() {
  return (
    <PageContainer>
      <AboutMe />
      <WorkExperiences />
      <ExtraActivities />
    </PageContainer>
  );
}

export default About;
