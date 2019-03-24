import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Layout from './components/Layout/'
import IndexPage from './pages/index'

class App extends Component {
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
