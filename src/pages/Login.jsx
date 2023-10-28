import Illustration from "../components/Illustration";
import loginImage from "../assets/images/signup.svg";
import LoginForm from "../components/LoginForm";


export default function Login() {
    return (
        <>
            <h1>Login to your account</h1>
            <div className="column">
                <Illustration img={loginImage} />
                <LoginForm/>
            </div>
        </>
    );
}
