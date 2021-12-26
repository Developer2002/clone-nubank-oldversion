import React from 'react';
import { StatusBar } from 'expo-status-bar';

import Home from './pages/Home';

const App = () => (
  <>
    <StatusBar style="light" backgroundColor="#8B10AE" />
    <Home />
  </>
);

export default App;