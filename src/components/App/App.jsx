import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom/cjs/react-router-dom.min';
import FeelingInput from '../FeelingInput';
import CommentsInput from '../CommentsInput'
import Review from '../Review'
import SubmissionSuccess from '../SubmissionSuccess'
import SupportedInput from '../SupportedInput'
import UnderstandingInput from '../UnderstandingInput'


function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
        <Router>
          <div>
            <button>Next</button>
            <Link to='/'>Next</Link>
          </div>
          <div>
            <Link to='/understanding'>Next</Link>
          </div>
          <div>
            <Link to='/supported'>Next</Link>
          </div>
          <div>
            <Link to='/comments'>Next</Link>
          </div>
          <div>
            <Link to='/review'>Next</Link>
          </div>
          <div>
            <Link to='/submit'>Submit</Link>
          </div>
          <div>
            <Link to='/'>Leave New Feedback</Link>
          </div>
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
        </Router>
      </header>
    </div>
  );
}

export default App;
