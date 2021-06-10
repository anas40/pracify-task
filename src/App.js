import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Footer from './components/footer/index.js';
import Home from './pages/home.js';
import Header from './components/header/index.js';

function App() {
  return (
    <Router>
      <Route component={Header} />
      <Switch>
        <Route path='/' component={Home} />
      </Switch>
      <Route component={Footer} />
    </Router>
  );
}

export default App;
