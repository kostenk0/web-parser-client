import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './Header'
import Main from './Main'

const App =()=>(
  <div>
    <Router>
    <Header/>
      <Route exact path='/' component={Main}/>
    </Router>
  </div>
)

export default App;
