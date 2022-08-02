import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro'

const About = () => {
  return (
    <section className="text-gray-600 body-font w-full max-w-[1200px]">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">OUR TEAM</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur praesentium asperiores magni Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 lg:w-1/2">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://media.istockphoto.com/photos/outdoors-portrait-of-a-beautiful-woman-picture-id539447364?s=612x612" />
              <div className="flex-grow sm:pl-8">
                <h2 className="title-font font-medium text-lg text-gray-900">Holden Caulfield</h2>
                <h3 className="text-gray-4000 mb-3">UI Developer</h3>
                <p className="mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis totam similique quidem.</p>
                <span className="inline-flex">
                  <Link to='/' className="text-gray-4000">
                    <FontAwesomeIcon icon={brands('meta')} className="w-5 h-5 mx-1 text-gray-600 cursor-pointer" />
                  </Link>
                  <Link to='/' className="ml-2 text-gray-4000">
                    <FontAwesomeIcon icon={brands('twitter')} className="w-5 h-5 mx-1 text-gray-600 cursor-pointer" />
                  </Link>
                  <Link to='/' className="ml-2 text-gray-4000">
                    <FontAwesomeIcon icon={brands('whatsapp')} className="w-5 h-5 mx-1 text-gray-600 cursor-pointer" />
                  </Link>
                </span>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/2">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://media.istockphoto.com/photos/beautiful-business-lady-picture-id658650350?s=612x612" />
              <div className="flex-grow sm:pl-8">
                <h2 className="title-font font-medium text-lg text-gray-900">Alper Kamu</h2>
                <h3 className="text-gray-4000 mb-3">Designer</h3>
                <p className="mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis dolor quod deleniti.</p>
                <span className="inline-flex">
                <Link to='/' className="text-gray-4000">
                    <FontAwesomeIcon icon={brands('meta')} className="w-5 h-5 mx-1 text-gray-600 cursor-pointer" />
                  </Link>
                  <Link to='/' className="ml-2 text-gray-4000">
                    <FontAwesomeIcon icon={brands('twitter')} className="w-5 h-5 mx-1 text-gray-600 cursor-pointer" />
                  </Link>
                  <Link to='/' className="ml-2 text-gray-4000">
                    <FontAwesomeIcon icon={brands('whatsapp')} className="w-5 h-5 mx-1 text-gray-600 cursor-pointer" />
                  </Link>
                </span>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/2">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
              <div className="flex-grow sm:pl-8">
                <h2 className="title-font font-medium text-lg text-gray-900">Atticus Finch</h2>
                <h3 className="text-gray-4000 mb-3">UI Developer</h3>
                <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore corrupti accusamus expedita.</p>
                <span className="inline-flex">
                <Link to='/' className="text-gray-4000">
                    <FontAwesomeIcon icon={brands('meta')} className="w-5 h-5 mx-1 text-gray-600 cursor-pointer" />
                  </Link>
                  <Link to='/' className="ml-2 text-gray-4000">
                    <FontAwesomeIcon icon={brands('twitter')} className="w-5 h-5 mx-1 text-gray-600 cursor-pointer" />
                  </Link>
                  <Link to='/' className="ml-2 text-gray-4000">
                    <FontAwesomeIcon icon={brands('whatsapp')} className="w-5 h-5 mx-1 text-gray-600 cursor-pointer" />
                  </Link>
                </span>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/2">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://media.istockphoto.com/photos/face-laughing-woman-outdoors-picture-id803609514?s=612x612" />
              <div className="flex-grow sm:pl-8">
                <h2 className="title-font font-medium text-lg text-gray-900">Henry Letham</h2>
                <h3 className="text-gray-4000 mb-3">Designer</h3>
                <p className="mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo laudantium nulla non!</p>
                <span className="inline-flex">
                <Link to='/' className="text-gray-4000">
                    <FontAwesomeIcon icon={brands('meta')} className="w-5 h-5 mx-1 text-gray-600 cursor-pointer" />
                  </Link>
                  <Link to='/' className="ml-2 text-gray-4000">
                    <FontAwesomeIcon icon={brands('twitter')} className="w-5 h-5 mx-1 text-gray-600 cursor-pointer" />
                  </Link>
                  <Link to='/' className="ml-2 text-gray-4000">
                    <FontAwesomeIcon icon={brands('whatsapp')} className="w-5 h-5 mx-1 text-gray-600 cursor-pointer" />
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
