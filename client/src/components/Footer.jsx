import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

const Footer = () => {
    return (
        <footer className="text-gray-600 body-font relative w-full max-w-[1200px]">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap md:text-left text-center order-first">
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <Link to='/' className="text-gray-600 hover:text-gray-800">First Link</Link>
                            </li>
                            <li>
                                <Link to='/' className="text-gray-600 hover:text-gray-800">Second Link</Link>
                            </li>
                            <li>
                                <Link to='/' className="text-gray-600 hover:text-gray-800">Third Link</Link>
                            </li>
                            <li>
                                <Link to='/' className="text-gray-600 hover:text-gray-800">Fourth Link</Link>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <Link to='/' className="text-gray-600 hover:text-gray-800">First Link</Link>
                            </li>
                            <li>
                                <Link to='/' className="text-gray-600 hover:text-gray-800">Second Link</Link>
                            </li>
                            <li>
                                <Link to='/' className="text-gray-600 hover:text-gray-800">Third Link</Link>
                            </li>
                            <li>
                                <Link to='/' className="text-gray-600 hover:text-gray-800">Fourth Link</Link>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <Link to='/' className="text-gray-600 hover:text-gray-800">First Link</Link>
                            </li>
                            <li>
                                <Link to='/' className="text-gray-600 hover:text-gray-800">Second Link</Link>
                            </li>
                            <li>
                                <Link to='/' className="text-gray-600 hover:text-gray-800">Third Link</Link>
                            </li>
                            <li>
                                <Link to='/' className="text-gray-600 hover:text-gray-800">Fourth Link</Link>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">SUBSCRIBE</h2>
                        <div className="flex justify-center items-center md:justify-start">
                            <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                                <input type="text" placeholder='Email' id="footer-field" name="footer-field" className="w-full bg-gray-200 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-yellow-200 focus:border-yellow-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <FontAwesomeIcon icon={solid('bell')} className="w-8 h-8 cursor-pointer text-yellow-500 hover:text-gray-400" />
                        </div>
                        <p className="text-gray-4000 text-sm mt-2 md:text-left text-center">Subscribe for more
                            <br className="block" />Have fun!
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-gray-200">
                <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
                    <Link to='/' className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <FontAwesomeIcon icon={solid('blog')} className='w-6 h-6 text-yellow-500 hover:text-yellow-700' />
                        <span className="ml-3 text-xl text-gray-4000 hover:text-gray-700">Yay!</span>
                    </Link>
                    <p className="text-sm text-gray-4000 sm:ml-6 sm:mt-0 mt-4">© 2022 Yay —
                        <Link to='/' rel="noopener noreferrer" className="text-gray-4000 hover:text-gray-700 ml-1" target="_blank">@Yay</Link>
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        <Link to='/' className="text-gray-4000">
                            <FontAwesomeIcon icon={brands('facebook-f')} className='w-6 h-6 text-yellow-500 hover:text-gray-400' />
                        </Link>
                        <Link to='/' className="ml-3 text-gray-4000">
                            <FontAwesomeIcon icon={brands('twitter')} className='w-6 h-6 text-yellow-500 hover:text-gray-400' />
                        </Link>
                        <Link to='/' className="ml-3 text-gray-4000">
                            <FontAwesomeIcon icon={brands('square-instagram')} className='w-6 h-6 text-yellow-500 hover:text-gray-400' />
                        </Link>
                        <Link to='/' className="ml-3 text-gray-4000">
                            <FontAwesomeIcon icon={brands('linkedin-in')} className='w-6 h-6 text-yellow-500 hover:text-gray-400' />
                        </Link>
                    </span>
                </div>
            </div>
        </footer>

    )
}

export default Footer
