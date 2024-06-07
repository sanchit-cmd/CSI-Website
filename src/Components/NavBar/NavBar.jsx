import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import logo from './csi_logo.png';

const NavBar = () => {
	const [nav, setNav] = useState(false);
	const [isNavFixed, setIsNavFixed] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 70) {
				setIsNavFixed(true);
			} else {
				setIsNavFixed(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	useEffect(() => {
		const body = document.querySelector('body');

		if (nav) {
			body.style.overflowY = 'hidden';
		} else {
			body.style.overflowY = 'scroll';
		}
	});

	const handleNav = () => {
		setNav(prevNav => !prevNav);
	};

	return (
		<div
			className={` flex flex-row items-center justify-between py-3  mx-auto px-6 ${
				isNavFixed
					? 'shadow-lg fixed top-0  w-full z-50 flex justify-center backdrop-blur-lg bg-white/30'
					: ' bg-white border-b border-black/20'
			}`}
		>
			<h1 className=''>
				<Link to='/'>
					<img src={logo} alt='csi' height='50px' width='50px' />
				</Link>
			</h1>
			<ul
				className={` flex-row font-bold text-lg items-center gap-4 hidden md:flex `}
			>
				<li>
					<Link to='/'>Home</Link>
				</li>

				<li>
					<Link className='cursor-pointer' to={'/team'}>Team</Link>
				</li>

				<li>
					<Link to={'/'}>Events</Link>
				</li>

				<li>
					<button className=''>
						<Link to='/register'>Register</Link>
					</button>
				</li>
			</ul>

			<div
				className='cursor-pointer block md:hidden z-50'
				onClick={handleNav}
			>
				{!nav ? (
					<AiOutlineMenu size={20} />
				) : (
					<AiOutlineClose size={20} />
				)}
			</div>

			<div
				className={`${
					nav
						? 'fixed left-0 top-0 w-[100%] z-40 h-screen border-r ease-in-out duration-500'
						: 'fixed left-[-100%]'
				} bg-white flex items-center justify-center`}
			>
				<ul className='pt-24 uppercase gap-4 flex flex-col px-6 justify-center items-center my-auto'>
					<li
						onClick={() => {
							setNav(false);
						}}
					>
						<Link to='/'>Home</Link>
					</li>

					<li
						onClick={() => {
							setNav(false);
						}}
					>
						<Link>Team</Link>
					</li>
					<li
						onClick={() => {
							setNav(false);
						}}
					>
						<Link>Events</Link>{' '}
					</li>

					<li>
						<button
							onClick={() => {
								setNav(false);
							}}
							className=''
						>
							<Link to='/register' className=''>
								REGISTER
							</Link>
						</button>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default NavBar;
