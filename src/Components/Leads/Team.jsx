import React, { useState } from 'react';
import Card from '../Faculty/Card';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

export default function Team() {
	const [current, setCurrent] = useState(true);

	function handlePast() {
		setCurrent(false);
	}
	function handleCurrent() {
		setCurrent(true);
	}

	return (
		<>
			<NavBar />
			<div className='flex flex-col items-center justify-center gap-4'>
				<h1 className='text-6xl font-bold text-center py-4 bg-gradient-to-r from-cyan-400 to-blue-700 inline-block text-transparent bg-clip-text'>
					Meet the Faculty
				</h1>

				<div className='flex items-center justify-center bg-gray-200 rounded-md px-2 py-1'>
					<button
						className={` px-3 py-1 rounded-md font-medium ${
							current
								? 'bg-transparent text-gray-500'
								: 'bg-white text-black'
						}`}
						onClick={handlePast}
					>
						Past
					</button>
					<button
						className={` px-3 py-1 rounded-md font-medium ${
							current
								? 'bg-white text-black'
								: 'bg-transparent text-gray-500'
						}`}
						onClick={handleCurrent}
					>
						Current
					</button>
				</div>

        {/* add current and past leads in the div below and show them according to the state of the app */}
        {/* lead images are given in the publix folder */}
        <div>
            <Card/>
        </div>
			</div>
			<Footer />
		</>
	);
}
