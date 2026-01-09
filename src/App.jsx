import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';

import PuzzleGame from '@/components/PuzzleGame';
import WelcomeScreen from '@/components/WelcomeScreen';
import AboutTopic from '@/components/AboutTopic';
import AboutUs from '@/components/AboutUs';

function App() {
  console.log('App rendered');

  return (
    <Router>
      <Helmet>
        <title>Puzzle Challenge - Interactive Game</title>
        <meta
          name="description"
          content="Complete the interactive jigsaw puzzle and discover more about our topic and team."
        />
      </Helmet>

      <Routes>
        <Route path="/" element={<PuzzleGame />} />
        <Route path="/welcome" element={<WelcomeScreen />} />
        <Route path="/about-topic" element={<AboutTopic />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>

      <Toaster />
    </Router>
  );
}

export default App;
