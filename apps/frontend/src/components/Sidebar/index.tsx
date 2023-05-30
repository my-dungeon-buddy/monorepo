import React, { useEffect, useState } from 'react';
import { FiMenu } from 'react-icons/all';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


const Wrapper = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-area: sidebar;
  background: ${props => props.theme.colors.background['100']};
  padding-inline: 20px;
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  padding-block: 20px;
  justify-content: space-between;

  @media (min-width: 576px) {
    display: none;
  }
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
`;


export const Sidebar = () => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia('(max-width: 576px)');
    const listener = (event: MediaQueryListEvent) => {
      setOpen(!event.matches);
    };
    mediaQueryList.addEventListener('change', listener);
    return () => {
      mediaQueryList.removeEventListener('change', listener)
    }
  });

  const toggleSidebar = () => setOpen(prevState => !prevState);

  return (
    <Wrapper>
      <Header>
        <span>CurrentRoute</span>
        <FiMenu onClick={toggleSidebar} />
      </Header>
      {
        isOpen &&
        <Links>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/tracker'>Initiative Tracker</NavLink>
        </Links>
      }
    </Wrapper>
  );
};
