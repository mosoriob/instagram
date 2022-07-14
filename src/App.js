import React, {lazy, Suspense} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import UserContext from "./context/user";
import useAuthListener from "./hooks/use-auth-listener";
const Dashboard = lazy(() => import("./pages/dashboard"));
const Login = lazy(() => import("./pages/login"));
const Signup = lazy(() => import("./pages/signup"));
const Profile = lazy(() => import("./pages/profile"));
const NotFound = lazy(() => import("./pages/not-found"));

export default function App() {
    const { user } = useAuthListener();
    return (
        <UserContext.Provider value={{ user }}>
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route path={ROUTES.DASHBOARD} component={Dashboard} exact/>
                    <Route path={ROUTES.LOGIN} component={Login} />
                    <Route path={ROUTES.SIGNUP} component={Signup} />
                    <Route path={ROUTES.PROFILE} component={Profile} />
                    <Route component={NotFound} />
                </Switch>
            </Suspense>
        </Router>
        </UserContext.Provider>
    );
}