import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { Route } from 'react-router-dom';
import Container from './components/Container'
class App extends React.Component {
  // redirect to SideMenu component when start the app 
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Container} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App