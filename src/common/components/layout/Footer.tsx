'use client';
import React from 'react';
import styled from 'styled-components';
import Title from '../Title';
import { CgCopyright } from 'react-icons/cg';

const Container = styled.div`
  width: 100vw;
  gap: 60px;
  background-color: ${(prop) => prop.theme.color.black};
  color: ${(prop) => prop.theme.color.bg};
`;
const Banner = styled.div`
  text-align: center;
  font-size: 1.2rem;
  background-color: ${(prop) => prop.theme.color.blue};
  padding: 20px;
  & > p {
    animation: flowText 20s linear infinite;
    white-space: nowrap;
  }
  overflow: hidden;
`;
const Contents = styled.div`
  display: flex;
  padding: 40px 20px;
  flex-direction: column;
  max-width: 1240px;
  margin: 0 auto;

  & > div:first-child {
    color: ${(prop) => prop.theme.color.white} !important;
  }
`;
const ContactInfo = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 60px 0 40px;
`;
const Item = styled.li`
  flex: 50%;
  display: flex;
  margin-bottom: 40px;
`;
const ItemTitle = styled.h5`
  font-size: 1.2rem;
  width: 100px;
  color: ${(prop) => prop.theme.color.description};
  border-right: 4px solid ${(prop) => prop.theme.color.description};
  margin-right: 20px;
`;
const ItemContents = styled.div`
  line-height: 1.6rem;
  font-size: 1rem;
  color: ${(prop) => prop.theme.color.green};
`;
const Copyright = styled.p`
  font-size: 1rem;
  font-weight: 400;

  color: ${(prop) => prop.theme.color.description};
`;
function Footer() {
  return (
    <Container>
      <Banner>
        <p>읽어주셔서 감사합니다. 귀하에게 언제나 행복이 가득하길! 🙌</p>
      </Banner>
      <Contents>
        <Title>{`Contact :)`}</Title>
        <ContactInfo>
          <Item>
            <ItemTitle>Mail</ItemTitle>
            <ItemContents>jiumaker@naver.com</ItemContents>
          </Item>
          <Item>
            <ItemTitle>Github</ItemTitle>
            <ItemContents>https://github.com/Baejiu</ItemContents>
          </Item>
          <Item>
            <ItemTitle>Blog</ItemTitle>
            <ItemContents>https://ji-u.tistory.com/</ItemContents>
          </Item>
          <Item>
            <ItemTitle>이력서</ItemTitle>
            <ItemContents>
              <a
                href="
                https://classic-script-a3e.notion.site/d3fadbcbb57f40c9be4788963f831a28"
                target="_blank"
                rel="noreferrer"
              >
                Notion 이력서
              </a>
            </ItemContents>
          </Item>
        </ContactInfo>
        <Copyright>
          <CgCopyright />
          2025 ji u, bae
        </Copyright>
      </Contents>
    </Container>
  );
}

export default Footer;
