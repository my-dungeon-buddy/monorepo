import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.aside`
  grid-area: sidebar;
  background: ${props => props.theme['background-100']};
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${props => props.theme['text-100']};
  padding-inline: 10px;
  width: 100%;
`;

const Header = styled.div`
  width: 100%;
  padding-block: 10px;
  display: flex;
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
    const listener = (event: MediaQueryListEvent) => {
      setOpen(!event.matches);
    };
    window.matchMedia('(max-width: 576px)').addEventListener('change', listener);
  });

  const toggleSidebar = () => setOpen(prevState => !prevState);

  return (
    <Wrapper>
      <Header>
        <span onClick={toggleSidebar}>Burger</span>
      </Header>
      {
        isOpen &&
        <Links>
          <NavLink to='/'>Home</NavLink>
        </Links>
      }

    </Wrapper>
  );
};
