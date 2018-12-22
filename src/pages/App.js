import React, { Component } from 'react';
import { Container } from 'reactstrap';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import './App.css';
import HomePage from './HomePage';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Container>

          <Switch>
            <Route path="/" exact component={HomePage} />
          </Switch>

        </Container>
      </BrowserRouter>
    );
  }
}

export default App;
