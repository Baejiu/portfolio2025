import { Title } from '@/common/components';
import ProiectService from '@/common/services/projects';
import { useInView } from 'motion/react';
import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import ProjectItem from '../components/ProjectItem';

const Container = styled.div`
  padding: 120px 0px 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: fit-content;

  width: 100vw;
  margin: 0 auto;
  gap: 60px;
`;
const Contents = styled.div`
  display: flex;
  position: relative;
  max-width: 100vw;
  padding: 120px 0px 120px 20px;

  justify-content: space-between;
  margin: 0 auto;
  width: 100vw;
  gap: 60px;

  & > ul {
    flex-grow: 1;
  }
`;
const Navigate = styled.div`
  position: sticky;
  top: 180px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 50vh;
  font-size: 1rem;
  color: ${({ theme }) => theme.color.description};

  & li {
    cursor: pointer;
    padding: 10px 0;
    position: relative;
    transition: all 0.2s;
  }
  & li:hover {
    color: ${({ theme }) => theme.color.green};
  }
  & .selected {
    color: ${({ theme }) => theme.color.title01};
    font-weight: bold;
  }
`;

function LatestProjects() {
  const [selected, setSelected] = useState<number>(0);
  const projects = ProiectService.getLatestProjects();
  const sectionsRef = useRef<HTMLUListElement>(null);
  const isInView = useInView(sectionsRef, { margin: '-10% 0px -10% 0px' });

  return (
    <Container>
      <Contents>
        <Navigate>
          <Title>Latest Projects.</Title>
          <ul>
            {projects.map((item, index) => (
              <li
                key={item.id}
                onClick={() => {
                  const element = document.getElementById(`${index}`);
                  element && element.scrollIntoView({ behavior: 'smooth' });
                }}
                className={selected == index ? 'selected' : ''}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </Navigate>
        <ul className="img-group" ref={sectionsRef}>
          {projects.map((item, index) => (
            <ProjectItem
              key={item.id}
              handleView={() => setSelected(index)}
              index={index}
              selected={isInView ? selected == index : false}
              item={item}
            />
          ))}
        </ul>
      </Contents>
    </Container>
  );
}

export default LatestProjects;
