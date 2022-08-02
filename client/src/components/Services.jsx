import React from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

const Services = () => {
    return (
        <section className="text-gray-600 body-font w-full max-w-[1200px]">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h2 className="text-xs text-yellow-500 tracking-widest font-medium title-font mb-1">OUR PAID SERVICES</h2>
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Lorem ipsum dolor sit.</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est eaque molestiae saepe, fuga nostrum corporis deleniti amet esse voluptatum sequi possimus fugiat dolores architecto quia eveniet et reiciendis itaque repellendus!</p>
                </div>
                <div className="flex flex-wrap">
                    <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
                        <p className="leading-relaxed text-base mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, quibusdam excepturi.</p>
                        <Link to='/' className="text-yellow-500 inline-flex items-center">
                            <FontAwesomeIcon icon={solid('hand-point-right')} className="w-8 h-8 text-yellow-500 hover:text-gray-400" />
                        </Link>
                    </div>
                    <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">The Catalyzer</h2>
                        <p className="leading-relaxed text-base mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, provident nulla.</p>
                        <Link to='/' className="text-yellow-500 inline-flex items-center">
                            <FontAwesomeIcon icon={solid('hand-point-right')} className="w-8 h-8 text-yellow-500 hover:text-gray-400" />
                        </Link>
                    </div>
                    <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Neptune</h2>
                        <p className="leading-relaxed text-base mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, sunt quis.</p>
                        <Link to='/' className="text-yellow-500 inline-flex items-center">
                            <FontAwesomeIcon icon={solid('hand-point-right')} className="w-8 h-8 text-yellow-500 hover:text-gray-400" />
                        </Link>
                    </div>
                    <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Melanchole</h2>
                        <p className="leading-relaxed text-base mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, ipsum optio?</p>
                        <Link to='/' className="text-yellow-500 inline-flex items-center">
                            <FontAwesomeIcon icon={solid('hand-point-right')} className="w-8 h-8 text-yellow-500 hover:text-gray-400" />
                        </Link>
                    </div>
                </div>
                <button className="flex mx-auto mt-16 text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-gray-50 hover:text-black rounded text-lg">Get Services</button>
            </div>
        </section>

    )
}

export default Services
