import React from 'react';
import {
   BrowserRouter as Router,
   Switch,
   Route,
} from "react-router-dom";
// import {Login} from "./pages/user/Login";
// import {Register} from "./pages/user/Register";
import {LandingPage} from "./pages/LandingPage";
import {Home} from './pages/Home';

function App() {
  return (
    <div>
      <Router>
         <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route path='/home' component={Home} />
            {/*<Route path={}*/}
         </Switch>
      </Router>
    </div>
  );
}

export default App;
