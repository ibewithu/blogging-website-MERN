import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { Link } from 'react-router-dom';

const Category = () => {
	const [category, setCategory] = useState([])

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const res = await axios.get(`/category`);
				setCategory(res.data)
			} catch (err) {
				console.log(err);
			}
		}
		fetchPosts();
		// eslint-disable-next-line
	}, []);

	return (
		<section className="flex flex-wrap text-gray-600 body-font w-full max-w-[1200px] min-h-screen">
			{category.length > 0 && category.map(x =>
				<div key={x._id} className="p-4 w-[80%] md:w-[40%] lg:w-[30%] mx-auto my-4 h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
					<h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">{x.name}</h1>
					<p className="leading-relaxed mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
					<Link to={`/blog/category/${x._id}`} className="text-indigo-500 inline-flex items-center">Learn More
						<FontAwesomeIcon icon={solid('arrow-right')} className="ml-2 mt-1" />
					</Link>
					<div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
						<span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
							<svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
								<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
								<circle cx={12} cy={12} r={3} />
							</svg>1.2K
						</span>
						<span className="text-gray-400 inline-flex items-center leading-none text-sm">
							<svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
								<path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
							</svg>6
						</span>
					</div>
				</div>
			)}
		</section>
	)
}

export default Category
