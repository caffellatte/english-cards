import './styles.css';
import Login from './container/Login';
import Dashboard from './container/Dashboard';
import Profile from './container/Profile';
import Cards from './container/Cards';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import ProtectedRoute from './protectedRoutes';
import {useSelector} from "react-redux";

export default function Page() {
  const auth = useSelector(state => state.isAuthenticated);

  return (
    <Router>
      <Switch>
        <ProtectedRoute auth={auth} exact path="/" component={Dashboard} />
        <ProtectedRoute auth={auth} exact path="/cards" component={Cards} />
        <ProtectedRoute auth={auth} exact path="/profile" component={Profile} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  );
}