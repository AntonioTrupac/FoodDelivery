import {
   BrowserRouter as Router,
   Switch,
   Route,
   Redirect,
} from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { Home } from './pages/Home';
import { PrivateRoute } from './components/privateRoute/PrivateRoute';

function App() {
   return (
      <div>
         <Router>
            <Switch>
               <Route exact path='/landing-page' component={LandingPage} />
               <PrivateRoute path='/home' component={Home} exact />
               <Redirect from='/' to='/home' />
            </Switch>
         </Router>
      </div>
   );
}

export default App;
