import React, { useState } from 'react';
import { MdOutlineKeyboardDoubleArrowUp } from 'react-icons/md';
import { MdKeyboardDoubleArrowDown } from 'react-icons/md';
const About = () => {
	const [showCSI, setCSI] = useState(false);
	const [showCSE, setCSE] = useState(false);
	const [showSRM, setSRM] = useState(false);
	return (
		<section
			className={`flex flex-col justify-center gap-4 items-center p-4 bg-white`}
			style={{ fontFamily: 'Roboto, sans-serif' }}
			name='about'
		>
			<div
				name=''
				className='flex flex-col justify-between items-center gap-4 w-full md:w-11/12'
			>
				<div className=' px-10 py-5 rounded text-center w-full z-20 bg-white/20 backdrop-blur-lg ring-black/20 ring relative flex items-center justify-center overflow-hidden'>
					{/* <div className='w-3/4 h-full bg-gradient-to-r absolute top-0 left-0 from-blue-600/5 from-40% to-transparent  my-auto -z-10 blur-xl'></div> */}
					<div className='grid grid-cols-2 bg-transparent z-20 mx-auto'>
						<div className='bg-transparent'>
							<h1 className='text-5xl font-black text-blue-700 mb-4'>
								About Us
							</h1>
							<p className=' text-left'>
								The Computer Society of India (CSI) is a
								national body representing The Computer Society
								of India (CSI), founded on March 6, 1965, is a
								national body for computer professionals with 72
								chapters, 511 student branches, and 100,000
								members. As a non-profit, it promotes
								professional integrity, competence, and
								partnership. CSI organizes conferences,
								seminars, and workshops, providing a platform
								for professionals, researchers, educators, and
								students to share knowledge and ideas. Governed
								by an executive committee, CSI aims to advance
								computing and IT practices in India.
							</p>
						</div>

						<div className='flex items-center justify-center bg-transparent px-4 py-4'>
							<img src='csi_logo.png' alt='' className='w-3/5' />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
