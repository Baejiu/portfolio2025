'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styled, { useTheme } from 'styled-components';

const Container = styled.div`
  padding: 4px 20px;
  display: flex;

  align-items: center;
  background-color: ${(prop) => prop.theme.color.bg};
`;

const LogoContainer = styled.div`
  width: 100px;
`;
const Nav = styled.ul`
  width: 100%;
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  justify-content: end;
`;
const NavItem = styled.li`
  text-transform: uppercase;
  display: inline-block;
  padding: 0.6rem 1rem;
  color: ${({ theme }) => theme.color.title01};

  &.contact {
    border-radius: 4px;
    color: ${({ theme }) => theme.color.bg};
    background-color: ${({ theme }) => theme.color.blue};
  }
`;

function Header() {
  const theme = useTheme();
  console.log(theme);
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
          </Link>
        </NavItem>
        <NavItem className="contact">
          <Link href={'/contact'}>contact</Link>
        </NavItem>
      </Nav>
    </Container>
  );
}

export default Header;
