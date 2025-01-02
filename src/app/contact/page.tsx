'use client';
import React from 'react';
import PageContainer from '@/common/components/layout/PageContainer';
import { Title } from '@/common/components';
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
`;
function Contact() {
  return (
    <PageContainer>
      <Container>
        <Title>Let's connect.</Title>
      </Container>
    </PageContainer>
  );
}

export default Contact;
