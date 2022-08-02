import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

const Post = ({ post }) => {
    const [bookmark, setBookmark] = useState(false)
    const [like, setLike] = useState(false)

    const toggleBookmark = () => {
        setBookmark(!bookmark)
    }
    const toggleLike = () => {
        setLike(!like)
    }

    return (
        <section className="w-[80%] md:w-[41%] lg:w-[30%] mx-auto mb-4 bg-gray-50 rounded-lg overflow-hidden">
            <img className="w-full max-h-[250px] object-center" src={post.image === "" ? "https://random.imagecdn.app/500/150" : post.image} alt="blog" />
            <div className="p-6">
                <span className='flex flex-wrap mb-1'>
                    {post.categories.map(x=><Link key={x._id} to={`/blog/category/${x._id}`} className="mr-2 text-md title-font font-medium text-gray-400">{x.name}</Link>)}
                </span>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{post.title}</h1>
                <p className="line-clamp-2 md:line-clamp-3 lg:line-clamp-4 overflow-hidden text-ellipsis leading-relaxed">{post.description}</p>
                <div className="flex items-center flex-wrap ">
                    <Link to={`/blog/${post._id}`} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                        <FontAwesomeIcon className="w-4 h-4 ml-2" icon={solid('arrow-right')} />
                    </Link>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        <FontAwesomeIcon icon={solid('thumbs-up')} onClick={toggleLike} className={`${like ? "text-yellow-500" : "text-gray-500"} w-5 h-5 mx-1 cursor-pointer`} />
                        1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                        <FontAwesomeIcon icon={solid('bookmark')} onClick={toggleBookmark} className={`${bookmark ? "text-yellow-500" : "text-gray-500"} w-5 h-5 mx-1 cursor-pointer`} />
                        12.5k
                    </span>
                </div>
            </div>
            <Link to='/' className="my-2 ml-1 inline-flex items-center">
                <span className="w-12 h-12 bg-yellow-500 hover:bg-gray-200 rounded-full flex items-center justify-center">{post.userId.username[0].toUpperCase()}</span>
                <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">{post.userId.username}</span>
                    <span className="text-gray-400 text-xs tracking-widest mt-0.5">{post.userId.email}</span>
                </span>
            </Link>
        </section>
    )
}

export default Post
