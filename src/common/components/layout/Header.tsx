'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styled, { useTheme } from 'styled-components';
import { FiArrowUpRight } from 'react-icons/fi';

const Container = styled.header`
  position: sticky;
  top: 0;
  z-index: 1;
  padding: 4px 20px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(prop) => prop.theme.color.header};
`;

const LogoContainer = styled.div`
  padding: 6px;
`;
const NavContainer = styled.div`
  display: flex;
`;
const Nav = styled.ul`
  width: 100%;
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  justify-content: end;
`;
const NavItem = styled.li`
  font-family: var(--font-geist-sans);
  font-size: 0.8rem;
  text-transform: uppercase;
  display: inline-block;
  padding: 0.4rem 16px;
  color: ${({ theme }) => theme.color.title_sub};

  &.contact {
    border-radius: 4px;
    color: ${({ theme }) => theme.color.bg};
    background-color: ${({ theme }) => theme.color.blue};
  }
  @media screen and (max-width: 768px) {
    font-size: 0.6rem;
    padding: 0.4rem 8px;
  }
`;

const ThemeButton = styled.button`
  margin-left: 12px;
  font-size: 1.2rem;
`;

function Header() {
  const theme = useTheme();

  return (
    <Container>
      <LogoContainer>
        <Link href={'/'}>
          <Image
            src="/assets/images/logo.png"
            alt="baejiu's portfolio"
            width={40}
            height={30}
          />
        </Link>
      </LogoContainer>
      <NavContainer className="slide">
        <Nav>
          <NavItem>
            <Link href={'/about'}>about</Link>
          </NavItem>
          <NavItem>
            <Link href={'/projects'}>projects</Link>
          </NavItem>
          <NavItem>
            <Link href={'https://ji-u.tistory.com/'} target="_blank">
              blog
              <FiArrowUpRight />
            </Link>
          </NavItem>
          <NavItem className="contact">
            <Link href={'/contact'}>contact</Link>
          </NavItem>
        </Nav>
        <ThemeButton onClick={() => theme.setTheme()}>
          {theme.id == 'light' ? '☀️' : '🌙'}
        </ThemeButton>
      </NavContainer>
    </Container>
  );
}

export default Header;
