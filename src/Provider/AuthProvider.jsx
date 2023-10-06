import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config';


export const AuthContext = createContext(null);
const auth = getAuth(app);


const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    // Google sign in with popUpp
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // Creat user/ Register by CreatUserWithEmailAndPassword
    const creatUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // created user ke sign In korano email end password diye
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // user log out by firebase signOut system

    const logOut = () =>{
        return signOut(auth)
    }

    // Observed on auth / current state change 

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('user in the state changed', currentUser);
            setUser(currentUser)
        });
        return ()=>{
            unSubscribe();
        }
    },[])






    const authInfo = {
        user,
        signInWithGoogle,
        creatUser,
        signIn,
        logOut

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;