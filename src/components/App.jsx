import Layout from "./Layout";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Quiz from "../pages/Quiz";
import Result from "../pages/Result";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import NotFound from "./NotFound";

function App() {
    return (
        <Router>
            <AuthProvider>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <PublicRoute exact path="/signup" component={Signup} />
                        <PublicRoute exact path="/login" component={Login} />
                        <PrivateRoute exact path="/quiz/:id" component={Quiz} />
                        <PrivateRoute exact path="/result/:id" component={Result} />
                        <Route exact component={NotFound}/>
                    </Switch>
                </Layout>
            </AuthProvider>
        </Router>
    );
}

export default App;