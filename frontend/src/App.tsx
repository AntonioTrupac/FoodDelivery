import {
   BrowserRouter as Router,
   Switch,
   Route,
   Redirect,
} from 'react-router-dom';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

import { LandingPage } from './pages/LandingPage';
import { PrivateRoutes } from './components/privateRoute';

function App() {

   return (
      <>
         <ReactNotification />
         <Router>
            <Switch>
               <Route exact path='/landing-page' component={LandingPage} />
               <PrivateRoutes />

               <Redirect from='/' to='/landing-page' />
            </Switch>
         </Router>
      </>
   );
}

export default App;
