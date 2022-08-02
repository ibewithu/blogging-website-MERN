import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

const Home = () => {
  return (
    <div className='flex flex-col w-full max-w-[1200px] min-h-screen'>
      <div className="flex mx-4 w-auto">
        <div className="flex flex-col px-4 w-auto text-gray-4000 justify-center">
          <p className='font-bold text-6xl my-4'>Blog</p>
          <p className='text-xs pr-7'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam numquam, aspernatur nostrum non laboriosam ut maiores illum explicabo dolore voluptatem minus quis velit aperiam mollitia eos incidunt ex animi quia dicta voluptatibus? Ipsam, incidunt!</p>
        </div>
        <img className='w-1/2 px-4' src="./home-img/home-1.png" alt="" />
      </div>
      <div className="flex mx-4 w-auto">
        <img className='w-1/2 px-4' src="./home-img/home-2.png" alt="" />
        <div className="flex flex-col px-4 w-auto text-gray-4000 justify-center">
          <p className='font-bold text-6xl my-4'>Explore Blogs </p>
          <span className='flex w-full'>
            <p className='text-xs w-7/12 inline p-1'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam numquam, aspernatur nostrum non laboriosam ut maiores illum explicabo dolore voluptatem minus quis velit aperiam mollitia eos incidunt ex animi quia dicta voluptatibus? Ipsam, incidunt!</p>
            <Link to='/blog' className='w-5/12 inline' >
              <FontAwesomeIcon icon={solid('magnifying-glass')} className='w-24 h-24 ml-4 text-yellow-500 hover:text-gray-400' />
            </Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Home
