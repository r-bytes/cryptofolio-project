import React from 'react'
import { WatchList } from "../components"
import { useAuthContext } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"

const Account = () => {
    const buttonClass = "w-full bg-button text-btnText px-6 py-2 rounded-2xl shadow-xl hover:shadow-2xl hover:bg-buttonHover my-2"
    const {user, logOut} = useAuthContext()
    const navigate = useNavigate()

    const handleSignOut = async () => {
        try {
            await logOut()
            navigate("/")
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className="max-w-[1140px] mx-auto">
            <div className="flex justify-between items-center my-12 py-8 rounded-div">
                <div>
                    <h1 className="text-2xl font-bold"> Account </h1>
                    <div>
                        <p> Welcome, {user?.email}</p>
                    </div>
                </div>
                <div>
                    <button
                        className={buttonClass}
                        onClick={handleSignOut}
                    >
                        Sign Out
                    </button>
                </div>
            </div>
            <div className="flex justify-center items-center my-12 py-8 rounded-div">
                <div className="w-full min-h-[200px]">
                    <h1 className="text-2xl font-bold py-4"> Watch List </h1>
                    <WatchList />
                </div>
            </div>
        </div>
    )
}

export default Account