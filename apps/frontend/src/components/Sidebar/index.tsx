import React, { useState } from 'react';
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

const Links = styled.div<{ $isOpen: boolean }>`
  display: ${({$isOpen}) => $isOpen ? 'flex' : 'none'};
  flex-direction: column;
  align-items: start;
  width: 100%;

  @media (min-width: 576px) {
    display: flex;
  }
`;

export const Sidebar = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleSidebar = () => setOpen(prevState => !prevState);

  return (
    <Wrapper>
      <Header>
        <span>CurrentRoute</span>
        <FiMenu onClick={toggleSidebar}/>
      </Header>
      <Links $isOpen={isOpen}>
        <NavLink to="/">Home</NavLink>
      </Links>
    </Wrapper>
  );
};
