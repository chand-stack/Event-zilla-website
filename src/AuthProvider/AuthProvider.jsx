import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";


export const AuthContext = createContext(null) 

const AuthProvider = ({children}) => {
    const[user,setUser] = useState(null)
    const[loading,setLoading] = useState(true)

    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const updateUser = (name,photo) =>{
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: `${name}`,photoURL:`${photo}` 
        })
    }

    const logout = () => {
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
            console.log(currentUser)
        })
        return () => {
            unSubscribe()
        }
    },[])

    const authInfo = {
          user,
          createUser,
          updateUser,
          loading,
          logout
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;