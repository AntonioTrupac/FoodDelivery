import {
   BrowserRouter as Router,
   Switch,
   Route,
   Redirect,
} from 'react-router-dom';

import { LandingPage } from './pages/LandingPage';
import { PrivateRoutes } from './components/privateRoute';
import { getAccessToken } from './accessToken';

function App() {
   const accessToken = getAccessToken();

   return (
      <div>
         <Router>
            <Switch>
               {accessToken ? <Redirect from='/landing-page' to='/' /> : null}
               <Route exact path='/landing-page' component={LandingPage} />
               <PrivateRoutes />

               <Redirect from='/' to='/landing-page' />
            </Switch>
         </Router>
      </div>
   );
}

export default App;
