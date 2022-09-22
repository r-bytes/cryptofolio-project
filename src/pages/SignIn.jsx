import React, { useState } from 'react'
import { AiFillLock, AiOutlineMail } from "react-icons/ai"
import { Link, useNavigate } from "react-router-dom"
import { useAuthContext } from "../context/AuthContext"

const SignIn = () => {
    const divInputClass = "relative my-2 w-full rounded-2xl shadow-xl"
    const textInputClass = "w-full p-2 bg-primary border border-input rounded-2xl focus:border-accent outline-none"
    const iconClass = "absolute right-2 top-3 text-gray-400"
    const buttonClass = "w-full bg-button text-btnText px-4 py-2 rounded-2xl shadow-xl hover:shadow-2xl hover:bg-buttonHover my-2"

    // states
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    
    // hooks
    const navigate = useNavigate()
    const { user, signIn } = useAuthContext()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")

        try {
            await signIn(email, password)
            navigate("/account")
            
        } catch (e) {
            setError(e.message)
            console.log(error)
        }
    }

    return (
        <div>
            <div className="max-w-[400px] mx-auto min-h-[600px] px-4 py-20">
                <h1 className="text-2xl font-bold"> Sign In </h1>
                <form onSubmit={handleSubmit}>
                    {/* Email */}
                    <div className="my-4">
                        <label htmlFor="email"> Email </label>
                        <div className={divInputClass}>
                            <input className={textInputClass}
                                type="email" name="email" id="email" placeholder="email" 
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <AiOutlineMail className={iconClass} />
                        </div>
                    </div>
                    {/* Password */}
                    <div className="my-4">
                        <label htmlFor="password"> Password </label>
                        <div className={divInputClass}>
                            <input className={textInputClass}
                                type="password" name="password" id="password" 
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <AiFillLock className={iconClass} />
                        </div>
                    </div>
                    <button className={buttonClass}> Sign in </button>
                </form>
                <p className="my-4 ml-2"> Not registered yet? <Link className="text-accent hover:underline" to={"/signup"}> Sign up </Link></p>
            </div>
        </div>
    )
}

export default SignIn