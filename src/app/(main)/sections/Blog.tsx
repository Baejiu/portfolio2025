import { Description, Title } from '@/common/components';
import BlogService from '@/common/services/blogs';
import { useInView } from 'motion/react';
import React, { useRef } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const Container = styled.div`
  width: 100vw;
  min-height: calc(100vh - 50px);
  padding: 120px 40px;
  text-align: center;

  & ul {
    padding-top: 40px;
    text-align: start;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
  }
  & li {
    max-width: 200px;
  }
  & img {
    border-radius: ${({ theme }) => theme.radius.small};
  }
  @media screen and (max-width: 768px) {
  }
`;

const Empty = styled.div`
  border-radius: ${({ theme }) => theme.radius.small};
  width: 200px;
  height: 200px;
  background-color: ${({ theme }) => theme.color.lightGreen};
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Blog() {
  const data = BlogService.getData();
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: '-100px 0px -100px 0px',
  });
  return (
    <Container ref={ref}>
      <Title className={isInView ? 'slide' : ''}>Write a blog.</Title>
      <ul>
        {data.map((item) => (
          <li>
            {item.thumbnail ? (
              <Image
                src={item.thumbnail}
                width={200}
                height={200}
                alt={item.title}
              />
            ) : (
              <Empty>📎</Empty>
            )}

            <Description>{item.title}</Description>
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default Blog;
