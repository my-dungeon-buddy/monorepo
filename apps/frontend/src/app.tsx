import { BrowserRouter as Router, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Routes } from './components/Routes';
import { Sidebar } from './components/Sidebar';

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-areas:
    "header header"
    "sidebar content"
    "footer footer";
`;

const Content = styled.div`
  grid-area: content;
  background: #2b2b2b;
  color: white;
`;

export function App() {
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
