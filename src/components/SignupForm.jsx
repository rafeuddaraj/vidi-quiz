import Form from "./Form";
import TextInput from "./TextInput";
import Checkbox from "./Checkbox";
import Button from "./Button";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";
import {useAuth} from '../contexts/AuthContext'
import { useHistory } from "react-router-dom";


export default function SignupForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [username, setUsername] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const {signup} = useAuth()
    const history = useHistory()

    const handleSubmit = async (e)=>{
        e.preventDefault()
        if(password !== confirmPassword){
          return setError("Password don't match!")
        }

        try{
            setError("")
            setLoading(true)
            await signup(email,password,username)
            history.push('/')

        }catch(err){
            console.log(err)
            setLoading(false)
            setError('Failed to create an account!')
        }
    }

    return (
        <Form style={{ height: "500px" }} onSubmit = {handleSubmit}>
            <TextInput
                type="text"
                value={username}
                required
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter name"
                icon={"person"}
            />

            <TextInput
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter email"
                icon={"alternate_email"}
            />

            <TextInput
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter password"
                icon={"lock"}
            />

            <TextInput
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                placeholder="Confirm password"
                icon={"lock_clock"}
            />

            <Checkbox text={"I agree to the Terms & Conditions"} required />
            <Button type="submit" disabled={loading}>
                <span>Submit now</span>
            </Button>

            {error && <p className="error">{error}</p>}

            <div className="info">
                Already have an account? <Link to="/login">Login</Link>
                instead.
            </div>
        </Form>
    );
}
