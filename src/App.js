import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from 'styles/GlobalStyle';
import Home from 'pages//Home';
import Header from 'components/Header';
import Company from 'pages/Company'
import Footer from 'components/Footer'
import ProjectList from 'pages/ProjectList'
function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
    
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/company" exact component={Company}/>
        <Route path="/project" exact component={ProjectList}/>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
