import React from 'react';
import { ReactTyped } from 'react-typed';

export default function () {
	return (
		<div className='bg-gray-900 text-white w-full px-10 py-8 my-24'>
			<div className='grid grid-cols-2 gap-4'>
				<div>
					<h1 className='text-6xl font-bold mb-5'>
						A community driven by{' '}
						<span>
							<ReactTyped
								className=' text-primary block'
								strings={[
									'SRMIST.',
									'inspiration.',
									'learning.',
									'collaboration.',
								]}
								typeSpeed={40}
								backSpeed={50}
								loop
							></ReactTyped>
						</span>
					</h1>

					<p className=''>
						The CSE department at SRM Institute of Science and
						Technology (SRMIST), NCR, offers an outstanding research
						environment and excellence in teaching, organizing
						workshops and webinars to prepare students for IT
						industry challenges. Established in 1997, SRMIST
						Ghaziabad houses over 5,000 students and 200 faculty
						members. It offers undergraduate, postgraduate, and
						doctoral programs across various fields. The 25-acre
						campus boasts modern infrastructure, including
						state-of-the-art labs, libraries, and classrooms, and
						has collaborations with international universities.
						SRMIST provides excellent education, vibrant student
						community, and various facilities, ensuring quality
						education and promising career opportunities.
					</p>
				</div>

				<div className='px-6 flex items-center justify-center'>
					<div className='rounded-xl w-full overflow-hidden flex items-center justify-center'>
						<img src='template.jpg' alt='' className='w-full' />
					</div>
				</div>
			</div>
		</div>
	);
}
