import { Description, Title } from '@/common/components';
import BlogService from '@/common/services/blogs';
import { useInView } from 'motion/react';
import React, { useRef } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

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
    cursor: pointer;
  }
  & li:hover p {
    color: ${({ theme }) => theme.color.title01};
    font-weight: bold;
  }
  & li p {
    padding-top: 8px;
    transition: all 0.2s;
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
          <li key={item.id}>
            <Link href={item.url} target="_black">
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
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default Blog;
