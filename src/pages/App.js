import React, { Component } from 'react';
import { Container } from 'reactstrap';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import './App.css';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import Menu from '../components/Menu';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Container>
          <Menu />

          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route render={() => {
              return (
                <div>Página não encontrada.</div>
              );
            }} />
          </Switch>

        </Container>
      </BrowserRouter>
    );
  }
}

export default App;
