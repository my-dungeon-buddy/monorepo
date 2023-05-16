import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.header`
  grid-area: header;
  background: #555;
  color: white;
`;

export const Header = () => (
  <Wrapper>
    Header
  </Wrapper>
);
