import {
   BrowserRouter as Router,
   Switch,
   Route,
   Redirect,
} from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { PrivateRoutes } from './components/privateRoute';

function App() {
   return (
      <div>
         <Router>
            <Switch>
               <Route exact path='/landing-page' component={LandingPage} />
               <PrivateRoutes />
               <Redirect from='/' to='/landing-page' />
            </Switch>
         </Router>
      </div>
   );
}

export default App;
