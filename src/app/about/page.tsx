'use client';
import React from 'react';
import PageContainer from '@/common/components/layout/PageContainer';
import AboutMe from './sections/AboutMe';
import WorkExperiences from './sections/WorkExperiences';
import ExtraActivities from './sections/ExtraActivities';

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
