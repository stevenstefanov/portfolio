import React from 'react';
import Header from './assets/components/Header';
import Body from './assets/components/Body';
import Footer from './assets/components/Footer';
import './App.css';

// Vercel
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/react';

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
    <Analytics />
    <SpeedInsights />
    </div>
  );
}

export default App;
