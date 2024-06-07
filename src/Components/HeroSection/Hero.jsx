import React from 'react';
import { ReactTyped } from 'react-typed';
import logo from './csi_logo.png';

const Hero = () => {
	return (
		<div
			className={`m-4 flex flex-col flex-wrap justify-center items-center gap-6 bg-white pb-14 h-[80vh]`}
		>
			<div className='md:w-auto flex flex-col justify-center items-center mb-4 md:mb-0'>
				<img src={logo} alt='logo' className='h-20 mb-5' />
				<h1 className='text-xl font-bold md:text-5xl '>
					COMPUTER SOCIETY OF INDIA
				</h1>
				<ReactTyped
					className='text-xl font-semibold'
					strings={['SRMIST DELHI-NCR CAMPUS']}
					typeSpeed={40}
					backSpeed={50}
					loop
				/>
			</div>
		</div>
	);
};

export default Hero;
