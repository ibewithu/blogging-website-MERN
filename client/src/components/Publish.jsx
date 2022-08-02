import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Publish = () => {
    const navigate = useNavigate()
    const userId = useSelector(state => state.user.value._id)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const [categories, setCategories] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const handlePublish = async (e) => {
        e.preventDefault()
        setError('')
        setLoading(true)
        await axios.post("/post/", {
            title,
            description,
            image,
            categories: categories.split(' '),
            userId
        })
        .then(() => {
            navigate('/')
        }).catch((err) => {
            setLoading(false)
            setError(err.response.data.message)
            setTimeout(() => {
                setError('')
            }, 5000);
        })
    }

    return (
        <div className="block m-6 p-6 rounded-lg shadow-lg bg-white w-auto max-w-[1200px]">
            <form onSubmit={handlePublish}>
                <div className="form-group mb-6">
                    <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-yellow-500 focus:outline-none" id="exampleInput7" placeholder="Blog title" value={title} onChange={(e) => setTitle(e.target.value)} required/>
                </div>
                <div className="form-group mb-6">
                    <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-yellow-500 focus:outline-none" id="exampleInput8" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} />
                </div>
                <div className="form-group mb-6">
                    <textarea className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-yellow-500 focus:outline-none" id="exampleFormControlTextarea13" rows={10} placeholder="Blog Description" value={description} onChange={(e) => setDescription(e.target.value)} required/>
                </div>
                <div className="form-group mb-6">
                    <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-yellow-500 focus:outline-none" id="exampleInput8" placeholder="Relevant categories" value={categories} onChange={(e) => setCategories(e.target.value)} required/>
                </div>
                <button type="submit" className=" w-full px-6 py-2.5 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-200 hover:text-yellow-500 hover:shadow-lg focus:bg-yellow-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-500 active:shadow-lg transition duration-150 ease-in-out" disabled={loading}>Publish</button>
                {error && <span className='text-red-700 pt-2'>{error}</span>}
            </form>
        </div>

    )
}

export default Publish
