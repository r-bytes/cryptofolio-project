import React from 'react'
import { AiOutlineInstagram } from "react-icons/ai"
import { FaFacebookF, FaGithub, FaTiktok, FaTwitter } from "react-icons/fa"
// import { useThemeContext } from "../context/ThemeContext"
import Theme from "./Theme"

const Footer = () => {
    const titleClass = "font-bold"
    const textClass = "text-sm py-2 leading-none"
    const buttonClass = "bg-button text-btnText px-4 py-2 w-full rounded-2xl shadow-xl hover:shadow-2xl hover:bg-buttonHover md:w-auto my-2 md:mr-2"
    const textInputClass = "bg-primary border border-input p-2 mr-2 w-full shadow-xl rounded-2xl md:w-auto outline-none focus:border-accent"
    
    return (
        <div className="rounded-div mt-8 pt-8 text-primary">
            <div className="grid md:grid-cols-2">
                <div className="flex justify-evenly w-full md:max-w-[300px] uppercase">
                    {/* Support */}
                    <div>
                        <h2 className={titleClass}> Support </h2>
                        <ul>
                            <li className={textClass}> Help Center </li>
                            <li className={textClass}> Contact Us </li>
                            <li className={textClass}> Api Status </li>
                            <li className={textClass}> Documentation </li>
                        </ul>
                    </div>
                    {/* Info */}
                    <div>
                        <h2 className={titleClass}> Info </h2>
                        <ul>
                            <li className={textClass}> About Us </li>
                            <li className={textClass}> Careers </li>
                            <li className={textClass}> Invest </li>
                            <li className={textClass}> Legal </li>
                        </ul>
                    </div>
                </div>
                {/* Right */}
                <div className="text-right">
                    <div className="w-full flex justify-end">
                        <div className="w-full md:w-[300px] py-4 relative">
                            <div className="flex justify-center md:justify-end py-4 md:py-0 md:pb-4 mt-[-1rem]">
                                {/* Theme toggle */}
                                <Theme />
                            </div>
                            <p className="text-center md:text-right md:mr-2"> Sign Up for crypto news </p>
                            <div className="py-4">
                                <form>
                                    <input className={textInputClass} type="email" name="email" placeholder="Enter your email" />
                                    <button className={buttonClass}> Sign Up </button>
                                </form>
                            </div>
                            <div className="flex py-4 justify-center text-accent gap-10 md:justify-end md:mr-2">
                                <AiOutlineInstagram />
                                <FaTiktok />
                                <FaTwitter />
                                <FaFacebookF />
                                <FaGithub />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className="py-4 text-center"> Powered by Coin Gecko </p>
        </div>
    )
}

export default Footer