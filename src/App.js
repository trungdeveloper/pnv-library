import React, { Component } from "react";
import Container from "./components/Container";
import BookDetails from './components/book/BookDetails'
// import AddBook from './components/book/AddBook'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='app'>
          <Switch>
            <Route exact path='/'component={Container} />
            <Route exact path='/book/:id' component={BookDetails} />
            {/* <Route exact path='/add' component={AddBook} /> */}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
