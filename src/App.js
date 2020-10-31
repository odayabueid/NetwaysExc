import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { Route } from 'react-router-dom';

import Container from './components/Container'
import Sales from './components/SalesContainer'
import Home from './components/Home'
class App extends React.Component {
  // redirect to SideMenu component when start the app 
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Home} />
          </div>
          <div>
            <Route exact path="/employeesList" component={Container} />
          </div>
          <div>
            <Route exact path="/salesList" component={Sales} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App