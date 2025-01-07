import { ProjectType } from '@/common/services/projects';
import React, { useCallback, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import Image from 'next/image';
import { Description, SubTitle } from '@/common/components';

const Container = styled.li`
  height: 100vh;
  width: 100%;
`;

const Contents = styled.div<{ selected?: boolean }>`
  position: sticky;
  top: 25%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  opacity: 0;
  transition: all 250ms ease-in;
  ${({ selected }) =>
    selected &&
    css`
      opacity: 1;
    `}
`;
const ImageBox = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  aspect-ratio: 16 / 9;
`;
interface Props {
  selected: boolean;
  index: number;
  item: ProjectType;
  handleView: () => void;
}

function ProjectItem(props: Props) {
  const { item, index, handleView, selected } = props;
  const targetRef = useRef<HTMLLIElement>(null);
  const handleScroll = useCallback(([entries]: IntersectionObserverEntry[]) => {
    if (entries.isIntersecting) {
      console.log(entries);
      handleView();
    } else {
    }
  }, []);

  useEffect(() => {
    let observer: IntersectionObserver;

    if (targetRef.current) {
      observer = new IntersectionObserver(handleScroll, {
        threshold: [0.7],
      });
      observer.observe(targetRef.current);
    }

    return () => observer && observer.disconnect();
  }, [handleScroll]);
  return (
    <Container id={`${index}`} ref={targetRef}>
      <Contents selected={selected}>
        <ImageBox>
          <Image src={item.thumbnail} fill alt={item.title} />
        </ImageBox>
        <SubTitle>{item.title}</SubTitle>
        <Description>{item.category}</Description>
        <Description>{item.tags}</Description>
      </Contents>
    </Container>
  );
}

export default ProjectItem;
