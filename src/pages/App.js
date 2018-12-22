import React, { Component } from 'react';
import { Container } from 'reactstrap';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import './App.css';
import HomePage from './HomePage';
import Menu from '../components/Menu';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Container>
          <Menu />

          <Switch>
            <Route path="/" exact component={HomePage} />
          </Switch>

        </Container>
      </BrowserRouter>
    );
  }
}

export default App;
