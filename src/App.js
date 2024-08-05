import React from 'react';
import Header from './assets/components/Header';
import Body from './assets/components/Body';
import Footer from './assets/components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <div className="bg-photo animation">
      </div>

      <div className="over">
        <Header />
        <Body />
        <Footer />
      </div>
    </div>
  );
}

export default App;
