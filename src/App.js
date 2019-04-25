import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './layout/Header';
import Footer from './layout/Footer';

//Pages
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import PagePage from './pages/PagePage';
import NotFoundPage from './pages/NotFoundPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/404" component={NotFoundPage} />
          {["/", "/pocetna"].map((path, index) =>
            <Route exact path={path} component={HomePage} key={index} />
          )}
          <Route path="/blog/:id" component={BlogPage} />
          <Route path="/:id" component={PagePage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
