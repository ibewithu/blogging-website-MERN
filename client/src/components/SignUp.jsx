import React, { useState } from 'react'
import {useNavigate } from 'react-router-dom'
import axios from 'axios'

const SignUp = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSignUp = async (e) => {
        e.preventDefault()
        setError('')
        setLoading(true)
        if(password === confirmPassword) {
            try {
                await axios.post("/auth/register", {
                    username,
                    email,
                    password
                })
                navigate('/signin')
            } catch (err) {
                setLoading(false)
                setError(err.response.data.message);
                setTimeout(() => {
                    setError('');
                }, 7000);
            }
        } else {
            setLoading(false)
            setError("Passwords do not match");
            setTimeout(() => {
                setError('');
            }, 7000);
        }
    }

    return (
        <section className="h-screen w-full max-w-[1200px]">
            <div className="container px-6 py-12 h-full">
                <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                    <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="w-full" alt="Sample" />
                    </div>
                    <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
                        <form onSubmit={handleSignUp}>
                            {/* Name input */}
                            <div className="mb-6">
                                <input type="text" className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Username" required value={username} onChange={(e)=>setUsername(e.target.value)} />
                            </div>
                            {/* Email input */}
                            <div className="mb-6">
                                <input type="email" className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Email address" required value={email} onChange={(e)=>setEmail(e.target.value)} />
                            </div>
                            {/* Password input */}
                            <div className="mb-6">
                                <input type="password" className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Password" required value={password} onChange={(e)=>setPassword(e.target.value)} />
                            </div>
                            {/* Re-enter Password input */}
                            <div className="mb-6">
                                <input type="password" className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Re-enter Password" required value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} />
                            </div>
                            {/* Submit button */}
                            <button type="submit" className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full" data-mdb-ripple="true" data-mdb-ripple-color="light" disabled={loading}>
                                Sign Up
                            </button>
                            {error && <span className='text-red-700 pt-2'>{error}</span>}
                        </form>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default SignUp
