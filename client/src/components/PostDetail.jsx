import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands, solid } from '@fortawesome/fontawesome-svg-core/import.macro'

const PostDetail = () => {
    const { _id } = useParams()
    const [post, setPost] = useState(null)

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await axios.get(`/post/${_id}`);
                setPost(res.data)
            } catch (err) {
                console.log(err);
            }
        }
        fetchPosts();
        // eslint-disable-next-line
    }, [_id]);

    return (
        <>
        {post && <div className="container mx-auto flex flex-wrap py-6">
            {/* Post Section */}
            <section className="w-full md:w-2/3 flex flex-col items-center px-3">
                <div className="w-full flex flex-col text-center md:text-left md:flex-row shadow bg-white mt-10 mb-10 p-6">
                    <div className="w-full md:w-1/5 flex justify-center items-center">
                        <FontAwesomeIcon icon={solid('user')} className="text-yellow-500 w-7/12 h-auto" />
                    </div>
                    <div className="ml-4 flex-1 flex flex-col justify-center md:justify-start">
                        <p className="font-semibold text-2xl">{post.userId.username}</p>
                        <p className="pt-2">{post.userId.email}</p>
                        <div className="flex items-center justify-center md:justify-start text-2xl no-underline text-yellow-500 pt-4">
                            <Link className="pl-4 hover:text-gray-400" to="#">
                                <FontAwesomeIcon icon={brands('facebook-f')} />
                            </Link>
                            <Link className="pl-4 hover:text-gray-400" to="#">
                                <FontAwesomeIcon icon={brands('instagram')} />
                            </Link>
                            <Link className="pl-4 hover:text-gray-400" to="#">
                                <FontAwesomeIcon icon={brands('twitter')} />
                            </Link>
                            <Link className="pl-4 hover:text-gray-400" to="#">
                                <FontAwesomeIcon icon={brands('linkedin-in')} />
                            </Link>
                        </div>
                    </div>
                </div>
                <article className="flex flex-col shadow my-4">
                    {/* Article Image */}
                    <Link to="#" className="hover:opacity-75">
                        <img src={post.image === "" ? "https://random.imagecdn.app/500/150" : post.image} alt="" />
                    </Link>
                    <div className="bg-white flex flex-col justify-start p-6">
                        <span className='flex flex-wrap mb-1'>
                            {post.categories.map(x => <Link key={x._id} to='/' className="mr-2 text-md title-font font-medium text-gray-400">{x.name}</Link>)}
                        </span>
                        <Link to="#" className="text-3xl font-bold hover:text-gray-700 pb-4">{post.title}</Link>
                        <p to="#" className="text-sm pb-8">
                            By <Link to="#" className="font-semibold hover:text-gray-800">{post.userId.username}</Link>, Published on {new Date(post.createdAt).toDateString()}
                        </p>
                        <h1 className="text-2xl font-bold pb-3">Content</h1>
                        <p className="pb-3">{post.description}</p>
                    </div>
                </article>
                <div className="w-full flex pt-6">
                    <Link to="#" className="w-1/2 bg-white shadow hover:shadow-md text-left p-6">
                        <p className="text-lg text-blue-800 font-bold flex items-center"><i className="fas fa-arrow-left pr-1" /> Previous</p>
                        <p className="pt-2">Lorem Ipsum Dolor Sit Amet Dolor Sit Amet</p>
                    </Link>
                    <Link to="#" className="w-1/2 bg-white shadow hover:shadow-md text-right p-6">
                        <p className="text-lg text-blue-800 font-bold flex items-center justify-end">Next <i className="fas fa-arrow-right pl-1" /></p>
                        <p className="pt-2">Lorem Ipsum Dolor Sit Amet Dolor Sit Amet</p>
                    </Link>
                </div>
            </section>
            {/* Sidebar Section */}
            <aside className="w-full md:w-1/3 flex flex-col items-center px-3">
                <div className="w-full bg-white shadow flex flex-col my-4 p-6">
                    <p className="text-xl font-semibold pb-5">About Me</p>
                    <p className="pb-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum dolores sunt perferendis, vitae doloribus perspiciatis minus.</p>
                    <Link to="#" className="w-full bg-yellow-500 text-white font-bold text-sm uppercase rounded hover:bg-gray-200 hover:text-yellow-500 flex items-center justify-center px-2 py-3 mt-4">
                        Get to know me
                    </Link>
                </div>
                <div className="w-full bg-white shadow flex flex-col my-4 p-6">
                    <p className="text-xl font-semibold pb-5">More from {post.userId.username}</p>
                    <div className="grid grid-cols-3 gap-3">
                        <img className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=1" alt='' />
                        <img className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=2" alt='' />
                        <img className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=3" alt='' />
                        <img className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=4" alt='' />
                        <img className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=5" alt='' />
                        <img className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=6" alt='' />
                        <img className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=7" alt='' />
                        <img className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=8" alt='' />
                        <img className="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=9" alt='' />
                    </div>
                    <Link to="#" className="w-full bg-yellow-500 text-white font-bold text-sm uppercase rounded hover:bg-gray-200 hover:text-yellow-500 flex items-center justify-center px-2 py-3 mt-6">
                        Follow me
                    </Link>
                </div>
            </aside>
        </div>}
        </>
    )
}

export default PostDetail
