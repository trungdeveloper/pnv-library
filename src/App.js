import React, { Component } from "react";
import Container from "./components/Container";
import BookDetails from './components/book/BookDetails'
import UpdateBook from './components/book/UpdateBook'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='app'>
          <Switch>
            <Route exact path='/'component={Container} />
            <Route exact path='/book/:id' component={BookDetails} />
            <Route exact path='/book/update/:id' component={UpdateBook} />
            {/* <Route exact path='/add' component={AddBook} /> */}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
