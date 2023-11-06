/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import auth from "../services/firebase/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    // const [validation, setValidation] = useState("");
    //     const [location, setLocation] = useState("");
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const userSignUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInWithOther = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (stableUser) => {
            setUser(stableUser);
            setLoading(false);
        });

        return () => {
            unSubscribe();
        }
    }, [])


    const authInfo = {
        user,
        loading,
        userSignUp,
        signInWithOther,
        logIn,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;