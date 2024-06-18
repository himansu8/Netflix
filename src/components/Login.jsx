import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase'

const Login = () => {
    const email = useRef(null)
    const password = useRef(null)
    const [errorMessage, setErrorMessage] = useState()
    const [isSignIn, setIsSignin] = useState(true)
    const toggleSignin = () => {
        setIsSignin(!isSignIn)
    }
    const handleBtnClick = (e) => {
        e.preventDefault()
        //console.log(email.current.value)
        const message = checkValidData(email.current.value, password.current.value)
        //console.log(errorMessage)
        setErrorMessage(message)
        if (message) return;
        if (!isSignIn) {
            //signup logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    console.log(user)
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage)
                });
        }
        else {
            //signin logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user)
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage)
                });


        }
    }
    return (
        <div>
            <Header />
            <div className='absolute inset-0'>
                <img className="h-full object-cover w-full" src="https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/be90e543-c951-40d0-9ef5-e067f3e33d16/IN-en-20240610-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                    alt="background" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
                <form className="w-full md:w-3/12 p-12 bg-black text-white rounded-lg bg-opacity-80">
                    <h1 className="font-bold text-3xl py-4">
                        {isSignIn ? "Sign In" : "Sign Up"}
                    </h1>

                    {!isSignIn && (
                        <input

                            type="text"
                            placeholder="Full Name"
                            className="p-4 my-4 w-full bg-gray-700"
                        />
                    )}
                    <input
                        ref={email}
                        type="text"
                        placeholder="Email Address"
                        className="p-4 my-4 w-full bg-gray-700"
                    />
                    <input
                        ref={password}
                        type="password"
                        placeholder="Password"
                        className="p-4 my-4 w-full bg-gray-700"
                    />
                    <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
                    <button
                        className="p-4 my-6 bg-red-700 w-full rounded-lg"
                        onClick={handleBtnClick}
                    >
                        {isSignIn ? "Sign In" : "Sign Up"}
                    </button>
                    <p className="py-4 cursor-pointer" onClick={toggleSignin}>
                        {isSignIn
                            ? "New to Netflix? Sign Up Now"
                            : "Already registered? Sign In Now."}
                    </p>

                </form>
            </div>
        </div>
    )
}

export default Login 