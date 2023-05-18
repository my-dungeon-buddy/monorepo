import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../assets/logo.png';

const Wrapper = styled.header`
  grid-area: header;
  background: ${props => props.theme.colors.background['100']};
  color: ${props => props.theme.colors.text['100']};
  display: flex;
  height: 67px;
  padding-inline: 10px;
  filter: drop-shadow(5px 5px 10px #000);
`;

const Logo = styled.img`
  height: 47px;
`

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${props => props.theme.colors.text['100']};
  font-weight: 700;
  text-decoration: none;
`

export const Header = () => (
  <Wrapper>
    <LogoLink to='/'>
      <Logo src={logo} alt=""/>
      MyDungeonBuddy
    </LogoLink>
  </Wrapper>
);
