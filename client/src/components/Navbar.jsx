import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setUser } from '../features/user'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

const Navbar = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user.value)
    const navigate = useNavigate()

    const handleSignOut = () => {
        dispatch(setUser({ _id: "" }))
        window.localStorage.removeItem('blog-user')
        navigate('/')
    }

    return (
        <header className="w-full bg-gray-200 text-gray-600 body-font flex p-5 flex-row items-center rounded-md">
            <Link to='/' className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                <FontAwesomeIcon icon={solid('blog')} className='w-6 h-6 text-yellow-500 hover:text-yellow-700' />
                <span className="ml-3 text-xl text-gray-4000 hover:text-gray-700">Yay!</span>
            </Link>
            <nav className="mr-auto ml-4 py-1 pl-4 border-l border-gray-400	flex items-center text-center justify-center">
                <Link to='/services' className="mr-5 hover:text-gray-900">Services</Link>
                <Link to='/blog' className="mr-5 hover:text-gray-900">Blogs</Link>
                <Link to='/publish' className="mr-5 hover:text-gray-900">Publish</Link>
                <Link to='/category' className="mr-5 hover:text-gray-900">Categories</Link>
            </nav>
            <>
                <Link to='/about' className="inline-flex items-center border-0 py-1 px-3 focus:outline-none text-base mx-2">
                    <FontAwesomeIcon icon={solid('circle-info')} className='w-6 h-6 mr-4 text-yellow-500 hover:text-gray-400' />
                </Link>
                <Link to='/contact' className="inline-flex items-center border-0 py-1 px-3 focus:outline-none text-base mx-2">
                    <FontAwesomeIcon icon={solid('message')} className='w-6 h-6 mr-4 text-yellow-500 hover:text-gray-400' />
                </Link>
            </>
            {user._id === "" ? <>
                <Link to='/signin' className="inline-flex items-center border-0 py-1 px-3 focus:outline-none text-base mx-2">
                    <FontAwesomeIcon icon={solid('sign-in-alt')} className='w-6 h-6 text-yellow-500 hover:text-gray-400' />
                </Link>
                <Link to='/signup' className="inline-flex items-center border-0 py-1 px-3 focus:outline-none text-base mx-2">
                    <FontAwesomeIcon icon={solid('user-plus')} className='w-6 h-6 text-yellow-500 hover:text-gray-400' />
                </Link>
            </>
                :
                <>
                    <Link to={`/profile/${user._id}`} className="inline-flex item-center border-1 py-1 px-3 focus:outline-none hover:bg-gray-50 rounded-full m-2 bg-yellow-500 cursor-pointer">{user?.username[0].toUpperCase()}</Link>
                    <span onClick={handleSignOut} className="inline-flex items-center border-0 py-1 px-3 focus:outline-none text-base mx-2">
                        <FontAwesomeIcon icon={solid('sign-out-alt')} className='cursor-pointer w-6 h-6 mx-4 text-yellow-500 hover:text-gray-400' />
                    </span>
                </>}
        </header>
    )
}

export default Navbar
