import React from 'react';
import Header from './components/Header'
import FirstContainer from './components/FirstContainer'
import SecondContainer from './components/SecondContainer'
import Features from './components/Features'
import ThirdContainer from './components/ThirdContainer'


function App() {
  return (
    <div style={{ maxWidth: '100%', padding: '0 240px'}}>
      <Header />
      <FirstContainer />
      <SecondContainer />
      <Features />
      <ThirdContainer />
    </div>
  );
}

export default App;
