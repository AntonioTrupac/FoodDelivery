import {
   BrowserRouter as Router,
   Switch,
   Route,
   Redirect,
} from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { Home } from './pages/Home';
import { useMeQuery } from './generated';
import { getAccessToken } from './accessToken';
import { PrivateRoute } from './components/privateRoute/PrivateRoute';

function App() {
   //   const { data, loading, error} = useMeQuery();
   //   const accessToken = getAccessToken();
   //   console.log(accessToken);

   return (
      <div>
         <Router>
            <Switch>
               {/* <Redirect exact from='/' to='/landing' /> */}
               <Route exact path='/landing-page' component={LandingPage} />
               <PrivateRoute path='/home' component={Home} exact />
               <Redirect from='/' to='/home' />
            </Switch>
         </Router>
      </div>
   );
}

export default App;
