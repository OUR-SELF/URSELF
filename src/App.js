import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from 'styles/GlobalStyle';

import Home from 'pages//Home';
import Login from 'pages/Login';
import SignUp from 'pages/SignUp';
import EmailSignUp from 'pages/EmailSignUp';
import ProjectList from 'pages/ProjectList';

import Header from 'components/Header';
import Footer from 'components/Footer';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route path="/signup/email" component={EmailSignUp} />
        <Route exact path="/project" component={ProjectList} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
