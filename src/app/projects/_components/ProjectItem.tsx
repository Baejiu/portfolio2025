import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { ProjectType } from '@/common/services/projects';
import { FiArrowUpRight } from 'react-icons/fi';

const Container = styled.li<{ hasLink?: boolean }>`
  position: relative;
  top: 0;
  flex-basis: calc(50% - 20px);
  overflow: hidden;
  border-radius: 4px;
  cursor: ${({ hasLink }) => (hasLink ? 'pointer' : 'default')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  box-shadow: 0px 4px 32px rgba(18, 18, 18, 0.08);
  transition: all 250ms ease-in;

  &:hover {
    top: -10px;
  }

  &:hover .img {
    transform: scale(1.02);
  }
  &:hover h4::before {
    width: 100%;
  }
  &:hover .imageBox::after {
    opacity: 0;
  }
  &:hover .linkIcon {
    animation: followUp 1s cubic-bezier(0, 0, 0.18, 0.99) infinite;
  }
  @media screen and (max-width: 925px) {
    flex-basis: 100%;
    & .imageBox::after {
      opacity: 0;
    }
  }
  @media screen and (max-width: 768px) {
  }
`;
const Contents = styled.div`
  padding: 20px 20px 40px;
`;
const CategoryBox = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 16px;

  & .icon {
    font-size: 32px;
  }
  & .category {
    margin-left: 20px;
    position: relative;
    font-size: 1rem;
    background-color: ${({ theme }) => theme.color.line};
    padding: 8px 16px;
    border-radius: 12px;
  }
  & .category::before {
    position: absolute;
    top: 2px;
    left: -10px;
    background-color: ${({ theme }) => theme.color.line};
    clip-path: polygon(100% 30%, 100% 50%, 100% 100%, 0 30%);
    content: '';
    width: 20px;
    height: 20px;
  }
`;
const ItemTitle = styled.h4`
  position: relative;
  font-size: 1.6rem;
  padding-bottom: 8px;
  margin-bottom: 24px;
  display: inline-block;

  &::before {
    position: absolute;
    background-color: ${({ theme }) => theme.color.black};
    bottom: 0px;
    left: 0px;
    content: '';
    width: 0px;
    height: 2px;
    transition: all 250ms ease-in;
  }
`;
const Brief = styled.p`
  font-size: 1rem;
  padding-bottom: 10px;
  color: ${({ theme }) => theme.color.description};
`;
const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  color: ${({ theme }) => theme.color.green};
  & .tag {
    padding-right: 4px;
    font-size: 1rem;
    color: makerDarkGrey;
  }
`;
const ImageContainer = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0.4;
    background-color: ${({ theme }) => theme.color.bg};
    transition: all 300ms ease-in;
  }
  & .img {
    transition: all 300ms ease-in;
  }
`;

function ProjectItem(props: ProjectType) {
  const { category, title, brief, thumbnail, tags, links } = props;
  const hasLink = links.length !== 0;

  const handleLink = () => {
    if (!hasLink) {
      return;
    }
    window.open(links[0].url);
  };

  return (
    <Container hasLink={hasLink} onClick={handleLink}>
      <Contents>
        <CategoryBox>
          <span className="icon">🖥</span>
          <span className="category">{category}</span>
        </CategoryBox>
        <ItemTitle>
          {title}
          {hasLink && <FiArrowUpRight className={'linkIcon'} />}
        </ItemTitle>
        <Brief>{brief}</Brief>
        <Tags>
          {tags.split(',').map((item: string, index: number) => {
            return (
              <li key={index} className={'tag'}>
                #{item}
              </li>
            );
          })}
        </Tags>
      </Contents>
      <ImageContainer className="imageBox">
        <Image src={thumbnail} fill alt={title} className="img" />
      </ImageContainer>
    </Container>
  );
}

export default ProjectItem;
