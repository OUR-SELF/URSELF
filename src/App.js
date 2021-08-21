import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from 'styles/GlobalStyle';
import Home from 'pages//Home';
import Login from 'pages/Login';
import SignUp from 'pages/SignUp';
import EmailSignUp from 'pages/EmailSignUp';
import Header from 'components/Header';

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
      </Switch>
    </Router>
  );
}

export default App;
