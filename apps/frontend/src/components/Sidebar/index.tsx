import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.header`
  grid-area: sidebar;
  background: yellow;
`;

export const Sidebar = () => (
  <Wrapper>
    Sidebar
  </Wrapper>
);
