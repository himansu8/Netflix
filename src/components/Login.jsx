import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignIn, setIsSignin] = useState(true)
    const toggleSignin = () => {
        setIsSignin(!isSignIn)
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
                   
                    type="text"
                    placeholder="Email Address"
                    className="p-4 my-4 w-full bg-gray-700"
                />
                <input
                   
                    type="password"
                    placeholder="Password"
                    className="p-4 my-4 w-full bg-gray-700"
                />
                {/* <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p> */}
                <button
                    className="p-4 my-6 bg-red-700 w-full rounded-lg"

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