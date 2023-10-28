/* eslint-disable react/prop-types */
import "../firebase";
import { createContext,useEffect,useState, useContext} from "react";
import {getAuth,createUserWithEmailAndPassword,updateProfile,signInWithEmailAndPassword,signOut,onAuthStateChanged} from 'firebase/auth'

const AuthContext = createContext()

export const useAuth = ()=>{
    return useContext(AuthContext)
}



export function AuthProvider({children}){
    const [currentUser,setCurrentUser] = useState()
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        const auth = getAuth()
        const unSubscribe = onAuthStateChanged(auth,(user)=>{
            setCurrentUser(user)
            setLoading(false)
        })
        return unSubscribe
    },[])

    // Signup 
    async function signup(email,password,username){
        const auth = getAuth()
        await createUserWithEmailAndPassword(auth,email,password)

        // Updating user profile
        await updateProfile(auth.currentUser,{
            displayName: username
        })
        const user = auth.currentUser
        setCurrentUser({
            ...user
        })
    }

    // Login
    function login(email,password){
        const auth = getAuth()
        return signInWithEmailAndPassword(auth,email,password)
    }

    // Logout
    function logout(){
        const auth = getAuth()
        return signOut(auth)
    }

    const value = {
        signup,
        login,
        logout,
        currentUser
    }

    return(
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
} 