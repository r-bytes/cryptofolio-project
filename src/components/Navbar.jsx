import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import Theme from "./Theme"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"
import { useAuthContext } from "../context/AuthContext"

const Navbar = () => {
    const hideMobile = "hidden md:block"

    const [nav, setNav] = useState(false)
    const {user, logOut} = useAuthContext()
    const navigate = useNavigate()
    
    const handleNav = () => setNav(prevState => !prevState)

    const handleSignOut = async () => {
        try {
            await logOut()
            handleNav()
            navigate("/")
        } catch (e) {
            console.log(e)
        }
    }


    return (
        <div className="rounded-div flex items-center justify-between h-20 font-bold">
            <Link to={"/"}>
                <h1 className="text-2xl hover:text-accent"> Cryptofolio </h1>
            </Link>
            <div className={hideMobile}>
                <Theme />
            </div>

            {user?.email
                ? (
                    <div>
                        <Link className="p-4 hover:text-accent" to={"/account"}> Account</Link>
                        <button className=" hover:text-accent" onClick={handleSignOut}> Sign out </button>
                    </div>
                ) : (
                    <div className={hideMobile}>
                        <Link to={"/signin"} className="p-4 hover:text-accent"> Sign In </Link>
                        <Link to={"/signup"} className="bg-button text-btnText px-5 py-2 ml-2 rounded-2xl shadow-lg hover:shadow-2xl hover:bg-buttonHover"> Sign Up </Link>
                    </div>
                )}


            {/* Desktop Menu Icon */}
            <div className="block md:hidden cursor-pointer z-10"
                onClick={handleNav}
            >
                {nav ? <AiOutlineClose size={"20px"} /> : <AiOutlineMenu size={"20px"} /> }
            </div>
            {/* Mobile Menu Icon */}
            <div className={nav ? "md:hidden fixed left-0 top-20 flex flex-col items-center justify-between w-full h-[90%] bg-primary ease-in duration-300 z-10"
                                : "fixed left-[-100%] top-20 h-[90%] flex flex-col items-center justify-between ease-in duration-300"}>
                <ul className="w-full p-4">
                    <li className="border-b py-6" onClick={handleNav}>
                        <Link to="/"> Home </Link>
                    </li>
                    <li className="border-b py-6" onClick={handleNav}>
                        <Link to="/account"> Account </Link>
                    </li>

                    <li className="py-6">
                        <Theme />
                    </li>
                </ul>
                
                {user?.email
                    ? (
                        <div className="flex flex-col w-full p-4">
                            <button className="w-full my-2 p-3 bg-button text-btnText rounded-2xl shadow-xl hover:bg-buttonHover" onClick={handleSignOut}> Sign out </button>
                        </div>
                    ) : (
                        <div className="flex flex-col w-full p-4">
                            <Link to={"/signin"} onClick={handleNav}>
                                <button className="w-full my-2 p-3 bg-primary text-primary border border-secondary rounded-2xl shadow-xl"> Sign In </button>
                            </Link>
                            <Link to={"/signup"} onClick={handleNav}>
                                <button className="w-full my-2 p-3 bg-button text-btnText rounded-2xl shadow-xl"> Sign Up </button>
                            </Link>
                        </div>)
                    }

            </div>

        </div>
    )
}

export default Navbar