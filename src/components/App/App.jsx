import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom/cjs/react-router-dom.min';

//Component Imports
import FeelingInput from '../FeelingInput';
import CommentsInput from '../CommentsInput'
import Review from '../Review'
import SubmissionSuccess from '../SubmissionSuccess'
import SupportedInput from '../SupportedInput'
import UnderstandingInput from '../UnderstandingInput'


function App() {

  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
      </div>  
      <div>
          <Route exact path='/'>
              <FeelingInput/>
          </Route>
          <Route exact path='/understanding'>
              <UnderstandingInput />
          </Route>
          <Route exact path='/supported'>
              <SupportedInput />
          </Route>
          <Route exact path='/comments'>
              <CommentsInput />
          </Route>
          <Route exact path='/review'>
              <Review />
          </Route>
          <Route exact path='/submit'>
              <SubmissionSuccess />
          </Route>
          <Route exact path='/'>
              <FeelingInput />
          </Route>
      </div>
    </Router>
  );
}

export default App;
