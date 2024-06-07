import React, { useState } from 'react';
import ScrollToTop from 'react-scroll-to-top';

import NavBar from '../Components/NavBar/NavBar';
import Hero from '../Components/HeroSection/Hero';
import About from '../Components/About/About';
import Faculty from '../Components/Faculty/Faculty';
import Footer from '../Components/Footer/Footer';
import SRM from '../Components/About/SRM';

export default function Home({ mode, handleMode }) {
	return (
		<div className={'bg-white'}>
			<NavBar />
			<Hero />
			<About />
			<SRM />
			<div className='flex flex-col gap-8 my-14'>
				<h1 className='text-6xl font-bold text-center mb-4 py-4 bg-gradient-to-r from-cyan-400 to-blue-700 inline-block text-transparent bg-clip-text'>
					Meet the Faculty
				</h1>
				<Faculty />
			</div>
			<div className='bg-white'>
				<Footer />
			</div>
			<ScrollToTop smooth className='flex items-center justify-center' />
		</div>
	);
}
