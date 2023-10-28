import Illustration from "../components/Illustration";

import signupImage from "../assets/images/signup.svg";

import SignupForm from "../components/SignupForm";

export default function Signup() {
    return (
        <>
            <h1>Create an account</h1>
            <div className="column">
                <Illustration img={signupImage} />
                <SignupForm/>
            </div>
        </>
    );
}
