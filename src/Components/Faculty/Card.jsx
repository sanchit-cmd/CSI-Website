import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

export default function ({ name, post, image, linkedin, github }) {
	return (
		<div className='bg-gray-100 px-8 mx-auto py-6 flex items-center justify-center flex-col rounded-lg w-fit shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.3)]'>
			<div className="h-40 w-40 overflow-hidden rounded-md bg-[url('template.jpg')] bg-cover bg-no-repeat bg-center mb-4"></div>
			<h3 className='font-bold text-2xl block mb-4 text-center'>
				Lore Ipsum{' '}
				{post && (
					<span className='font-medium text-sm text-primary block text-center'>
						{post}
					</span>
				)}
			</h3>
			<h3 className='font-medium text-sm text-primary'></h3>

			<div className='flex items-center justify-center gap-4'>
				{linkedin && (
					<a href='' target='_blank'>
						{' '}
						<FaLinkedin className='text-2xl text-gray-500' />
					</a>
				)}
				{github && (
					<a href='' target='_blank'>
						{' '}
						<FaGithub className='text-2xl text-gray-500' />
					</a>
				)}
			</div>
		</div>
	);
}
