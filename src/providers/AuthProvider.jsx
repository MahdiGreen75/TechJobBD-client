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
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [applicantsCount, setApplicansCount] = useState([]);  

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

    useEffect(() => {
        fetch('http://localhost:5000/get-applied-jobs')
            .then(res => res.json())
            .then(data => {
                //applied jobs functionallity
                const userEmail = user?.email;
                const dataArr = data.map(item => item[userEmail])
                const arr = dataArr.filter(item => Boolean(item))
                //applicant's number functionallity
                const dataValues = data.map(item => Object.values(item)[1]);
                const counts = {};
                for (const item of dataValues) {
                    if (counts[item]) {
                        counts[item]++;
                    } else {
                        counts[item] = 1;
                    }
                }
                const result = {};
                for (const key in counts) {
                    if (counts[key] > 1) {
                        result[key] = counts[key];
                    }
                }
                setApplicansCount(result);
                setAppliedJobs(arr);
            })
    }, [user])

    const authInfo = {
        user,
        loading,
        userSignUp,
        signInWithOther,
        logIn,
        logOut,
        appliedJobs,
        applicantsCount
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;