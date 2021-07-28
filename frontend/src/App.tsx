import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { Home } from './pages/Home';
import { useMeQuery } from './generated';
import { getAccessToken } from './accessToken';
import { PrivateRoute } from './components/privateRoute/privateRoute';

function App() {
  //   const { data, loading, error} = useMeQuery();
  const accessToken = getAccessToken();
  console.log(accessToken);

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <PrivateRoute path='/home' component={Home} />
          {/*<Route path={}*/}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
