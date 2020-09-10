import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

import PortfolioContextProvider from './contexts/PortfolioContext';

function App() {
  return (
    <div className="app">
      <Header />
      <PortfolioContextProvider>
        <Content />
      </PortfolioContextProvider>
      <Footer />
    </div>
  );
}

export default App;
