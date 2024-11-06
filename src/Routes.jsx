import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import POC from "./components/poc";
import { AppRoutes } from "./constants/AppRoutes";
import Navigation from "./components/navigation";
import Authentication from "./components/authentication";
import Settings from "./components/settings";
import Dashboard from "./components/dashboard";
import Profile from "./components/profile";

const Routes = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path={`/`} component={POC} />
        {/* <Route exact path={AppRoutes.AUTHENTICATION} component={Authentication} /> */}
        <Route exact path={AppRoutes.DASHBOARD} component={Dashboard} />
        <Route exact path={AppRoutes.SETTINGS} component={Settings} />
        <Route exact path={AppRoutes.PROFILE} component={Profile} />
      </Switch>
    </Router>
  );
};

export default Routes;
