import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import ProjectItem from './ProjectItem';
import ProiectService from '@/common/services/projects';

const Container = styled.div<{ loading?: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 40px;
  flex-wrap: wrap;
  opacity: 0;
  transform: translate(0, 25px);
  transition: opacity 100ms ease-out, transform 100ms ease;

  ${({ loading }) =>
    !loading &&
    css`
      transition: opacity 250ms ease-out, transform 300ms ease;
      opacity: 1;
      transform: translate(0, 0);
    `}
`;
interface Props {
  selectFilter?: string;
}

function ProjectList({ selectFilter }: Props) {
  const data = ProiectService.getData(selectFilter);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!selectFilter || !data) {
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 250);
  }, [selectFilter]);
  return (
    <Container loading={loading} className="slide delay02">
      {data.map((item) => (
        <ProjectItem {...item} key={item.id} />
      ))}
    </Container>
  );
}

export default ProjectList;
