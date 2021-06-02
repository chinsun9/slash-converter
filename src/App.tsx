import React from 'react';
import styled from '@emotion/styled';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

const Style = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  color: ${(props) => props.theme.color.textPrimary};
`;

function App() {
  return (
    <Style>
      <Header />
      <Main />
      <Footer />
    </Style>
  );
}

export default App;
