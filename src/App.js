import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

import {BrowserRouter, Route} from 'react-router-dom'
import Layout from './components/Layout/'
import IndexPage from './pages/index'

class App extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Route exact path='/' component={IndexPage}/>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
