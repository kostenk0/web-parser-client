import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './Header'
import Main from './Main'
import Find from './Find'

const App =()=>(
  <div>
    <Router>
    <Header/>
      <Route exact path='/' component={Main}/>
      <Route exact path='/find' component={Find}/>
    </Router>
  </div>
)

export default App;
