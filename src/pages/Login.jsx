import Illustration from "../components/Illustration";
import loginImage from "../assets/images/signup.svg";
import Form from "../components/Form";
import classes from "../styles/Login.module.css";
import TextInput from "../components/TextInput";
import Button from "../components/Button";

export default function Login() {
    return (
        <>
            <h1>Login to your account</h1>
            <div className="column">
                <Illustration img={loginImage} />

                <Form className={classes.login}>
                    <TextInput
                        icon={"alternate_email"}
                        type="text"
                        placeholder={"Enter email"}
                    />

                    <TextInput
                        icon={"lock"}
                        type="password"
                        placeholder={"Enter password"}
                    />

                    <Button>
                        <span>Submit now</span>
                    </Button>

                    <div className="info">
                        {`Don't have an account?`}
                        <a href="signup.html">Signup</a> instead.
                    </div>
                </Form>
            </div>
        </>
    );
}
