import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function PublicRoute({ component: Component, ...rest }) {
    const { currentUser } = useAuth();
    return currentUser ? (
        <Redirect to="/" />
    ) : (
        <Route {...rest}>{(props) => <Component {...props} />}</Route>
    );
}
