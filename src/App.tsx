import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import SelfRoute from './components/SelfRoute';
import { router } from './router';

function App(): JSX.Element {
  return (
    <Router>
      <SelfRoute router={router} />
    </Router>
  );
}

export default App;
