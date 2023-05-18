import React from 'react';
import { BrowserRouter as Router, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Routes } from './components/Routes';
import { Sidebar } from './components/Sidebar';

const Layout = styled.div`
  display: grid;
  grid-template-columns: inherit;
  grid-template-rows: repeat(2, fit-content(100%)) 1fr 50px;
  grid-template-areas:
    "header"
    "sidebar"
    "content"
    "footer";
  height: 100%;

  @media (min-width: 576px) {
    grid-template-columns: 1fr 3fr;
    grid-template-rows: fit-content(100%) 1fr 50px;
    grid-template-areas:
    "header header"
    "sidebar content"
    "footer footer";
  }
`;

const Content = styled.div`
  grid-area: content;
  background: ${props => props.theme.colors.background['200']};
  color: ${props => props.theme.colors.text['100']};
  padding: 10px;
`;

export function App(): JSX.Element {
  return (
    <Router>
      <Layout>
        <Header />
        <Sidebar />
        <Content>
          <Routes />
          <Outlet />
        </Content>
        <Footer />
      </Layout>
    </Router>
  );
}

export default App;
