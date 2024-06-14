import React, { useState, useEffect } from 'react';
import Card from '../Faculty/Card';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

export default function Team() {
	const [current, setCurrent] = useState(true);
	const [leads, setLeads] = useState([]);
	const [loading, setLoading] = useState(true);	

	useEffect(() => {
		fetch('/data.json')
			.then(response => response.json())
			.then(data => {
				setLeads(data.data);
				setLoading(false);
			})
			.catch(error => {
				console.error('Error fetching data:', error);
				setLoading(false);
			});
	}, []);

	function handlePast() {
		setCurrent(false);
	}

	function handleCurrent() {
		setCurrent(true);
	}

	const currentLeads = leads;
	const pastLeads = [];

	const displayedLeads = current ? currentLeads : pastLeads;

	return (
		<>
			<NavBar />
			<div className='flex flex-col items-center justify-center gap-4'>
				<h1 className='text-6xl font-bold text-center py-4 bg-gradient-to-r from-cyan-400 to-blue-700 inline-block text-transparent bg-clip-text'>
					Meet the Faculty
				</h1>

				<div className='flex items-center justify-center bg-gray-200 rounded-md px-2 py-1'>
					<button
						className={`px-3 py-1 rounded-md font-medium ${
							current ? 'bg-transparent text-gray-500' : 'bg-white text-black'
						}`}
						onClick={handlePast}
					>
						Past
					</button>
					<button
						className={`px-3 py-1 rounded-md font-medium ${
							current ? 'bg-white text-black' : 'bg-transparent text-gray-500'
						}`}
						onClick={handleCurrent}
					>
						Current
					</button>
				</div>

				{loading ? (
					<div>Loading...</div>
				) : (
					<div className='flex flex-wrap justify-center gap-4'>
						{displayedLeads.length > 0 ? (
							displayedLeads.map(lead => (
								<Card
									key={lead.id}
									name={lead.title}
									post={lead.subtitle}
									image={lead.imageUrl}
									linkedin={lead.linkedin}
									github={lead.github}
								/>
							))
						) : (
							<div className='text-center text-gray-500'>
								Data not available
							</div>
						)}
					</div>
				)}
			</div>
			<Footer />
		</>
	);
}
