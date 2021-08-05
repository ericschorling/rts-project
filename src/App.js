import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import {Home} from './components/Home'
import {Search} from './components/Search'
import { History } from './components/History'

function App() {
  return (
    <div className="App">
      <Router>
        <nav className="nav">
          <Link to='/'>
            Home 
          </Link>
          <Link to='/search'>
            Search 
          </Link>
          <Link to='/history'>
            History
          </Link>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/history">
            <History />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
