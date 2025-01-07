'use client';

import PageContainer from '@/common/components/layout/PageContainer';
import Intro from './(main)/sections/Intro';
import Features from './(main)/sections/Features';
import Skills from './(main)/sections/Skills';
import LatestProjects from './(main)/sections/LatestProjects';

export default function Home() {
  return (
    <PageContainer>
      <Intro />
      <LatestProjects />
      <Features />
      <Skills />
    </PageContainer>
  );
}
