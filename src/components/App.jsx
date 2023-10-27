import Nav from "./Nav";
import Layout from "./Layout";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Quiz from "../pages/Quiz";

function App() {
    return (
        <>
            <Nav />
            <Layout>
                {/* <Home/> */}
                {/* <Signup /> */}
                {/* <Login/> */}
                <Quiz/>
            </Layout>
        </>
    );
}

export default App;