import React from 'react';
import Header from './assets/components/Header';
import Body from './assets/components/Body';
import Footer from './assets/components/Footer';
import { SpeedInsights } from '@vercel/speed-insights/react';
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
    <SpeedInsights />
    </div>
  );
}

export default App;
