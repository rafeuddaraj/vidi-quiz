import Form from "../components/Form";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import {Link} from 'react-router-dom'
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
export default function LoginForm() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState('')
    const [loading,setLoading] = useState(false)

    const navigation = useNavigate()
    const {login} = useAuth()


    const handleForm = async (e)=>{
        e.preventDefault()
        try{
            setLoading(true)
            setError('')
            await login(email,password)
            navigation('/')
        }catch(e){
            console.log(e);
            setLoading(false)
            setError("Failed to login!")
        }

    }


    return (
        <Form style={{height:'330px'}} onSubmit = {handleForm}>
            <TextInput
                icon={"alternate_email"}
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder={"Enter email"}
            />

            <TextInput
                icon={"lock"}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder={"Enter password"}
            />

            <Button type="submit" disabled={loading}>
                <span>Submit now</span>
            </Button>

            {error && <p className="error">{error} </p>}

            <div className="info">
                {`Don't have an account?`}
                <Link to="/signup"> Signup</Link> instead.
            </div>
        </Form>
    );
}
