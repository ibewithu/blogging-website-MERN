import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { Link } from 'react-router-dom'
import Post from './Post';

const Profile = () => {
    const { _id } = useParams();
    const [user, setUser] = useState({});
    const [userChar, setUserChar] = useState('');
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await axios.get(`/user/${_id}`);
                setUser(res.data)
                setUserChar(res.data.username[0].toUpperCase())
            } catch (err) {
                console.log(err);
            }
        }
        fetchUser();
    }, [_id]);

    const expandPostSection = () => {
        if(posts) {
            setPosts(null)
        }
        else {
            const fetchPosts = async () => {
                try {
                    const res = await axios.get(`/post/?userId=${_id}`);
                    setPosts(res.data)
                } catch (err) {
                    console.log(err);
                }
            }
            fetchPosts();
        }
    }


    return (<>
        {user && <div className="min-h-screen w-screen max-w-[1200px]">
            <section className="my-2 w-screen max-w-[1200px] h-[37vh]">
                <span className="w-full h-[100%] block bg-no-repeat bg-cover" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80")' }} />
            </section>
            <section className="my-2 px-4 w-full max-w-[1200px] min-h-[63vh]">
                <div className="relative flex flex-col mb-6 -mt-24 p-2 shadow-xl rounded-lg w-full min-h-[63vh] bg-white">
                    <div className="flex flex-wrap px-4 justify-around">
                        <div className="relative -mt-24 w-1/2 lg:w-3/12 lg:order-2 flex justify-center items-center">
                            <span className="shadow-2xl rounded-full bg-yellow-500 aspect-square w-52 lg:w-64 flex justify-center items-center text-9xl">{userChar}</span>
                        </div>
                        <div className="w-full lg:w-3/12 px-4 lg:order-3 lg:text-right lg:self-center">
                            <div className="py-6 px-3 mt-32 sm:mt-0">
                                <button className="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150" type="button">
                                    Connect
                                </button>
                            </div>
                        </div>
                        <div className="w-full lg:w-3/12 px-4 lg:order-1">
                            <div className="flex justify-center py-4 lg:pt-4 pt-8">
                                <div className="mr-4 p-3 text-center">
                                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">22</span><span className="text-sm text-blueGray-400">Friends</span>
                                </div>
                                <div className="mr-4 p-3 text-center">
                                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">10</span><span className="text-sm text-blueGray-400">Photos</span>
                                </div>
                                <div className="lg:mr-4 p-3 text-center">
                                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">89</span><span className="text-sm text-blueGray-400">Comments</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-12">
                        <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700">
                            {user.username}
                        </h3>
                        <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                            <FontAwesomeIcon icon={solid('map-marker-alt')} className="mr-2 text-lg text-blueGray-400" />
                            Delhi, India
                        </div>
                    </div>
                    <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                        <div className="flex flex-wrap justify-center">
                            <div className="w-full lg:w-9/12 px-4">
                                <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                                    An artist of considerable range, Jenna the name taken by
                                    Melbourne-raised, Brooklyn-based Nick Murphy writes,
                                    performs and records all of his own music, giving it a
                                    warm, intimate feel with a solid groove structure. An
                                    artist of considerable range.
                                </p>
                                <Link onClick={expandPostSection} to='#' className="font-normal text-pink-500">{posts ? 'collapse posts' : 'expand posts'}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {posts && <span className="my-2 flex flex-wrap w-full items-start">
                {posts.length > 0 && posts.map((x, i) => <Post post={x} key={x._id} />)}
            </span>}
        </div>}
    </>)
}

export default Profile
