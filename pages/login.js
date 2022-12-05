import React, { useState } from 'react';
import Image from 'next/image';
import { images } from '../src/components/helper/utils/images/index';
import { icons } from '../src/components/utils/icons/index';
import { useRouter } from 'next/router';
const login = () => {
	const router = useRouter();
	const [isPublished ,setIsPublished]=useState(null)
	const _handleRadio=(event)=> {
		const isPublished = event.currentTarget.value === 'true' ? true: false;
		console.log('handle', isPublished);
		setIsPublished( isPublished );
	  }
	return (
		<div>
			
			<div class='w-full h-screen flex'>
				<Image
					src={images.couvertureSignIn}
					objectFit='cover'
					alt='background'
					class=' object-center  w-7/12'
				/>
				<div class='bg-white flex flex-col justify-center items-center w-5/12 shadow-lg'>
				<div className=' p-2 -mt-60 mb-50' style={{}}>
					{icons.logo_maison_fondant}
				</div>
					<h1 class='text-3xl font-bold text-orange-600 mb-12'>
						Bienvenu, Equipe Maison Fondant
					</h1>
					<div class='w-1/2 text-center'>
						<input
							type='text'
							name='username'
							placeholder='username'
							autocomplete='off'
							class='shadow-md border w-full h-10 px-3 py-2 text-orange-500 focus:outline-none focus:border-orange-500 mb-3 rounded'
						/>
						<input
							type='password'
							name='password'
							placeholder='password'
							autocomplete='off'
							class='shadow-md border w-full h-10 px-3 py-2 text-orange-500 focus:outline-none focus:border-orange-500 mb-3 rounded'
						/>

						<h3 class='mb-4 font-semibold text-gray-900 dark:text-white'>
							Identification
						</h3>
						<ul class='items-center w-full mb-12 text-sm font-medium text-gray-900 bg-white rounded-lg  sm:flex  dark:border-gray-200 dark:text-white'>
							
							<li class='w-full border-b  sm:border-b-0  dark:border-gray-600'>
								<div class='flex items-center pl-3'>
									<input
										id='react-checkbox-list'
										type='radio'
										checked={isPublished === true}
										onChange={()=>_handleRadio(event)} 
										value=''
										
										class='w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
									/>
									<label
										for='react-checkbox-list'
										class='py-3 ml-2 w-full text-sm font-medium text-black'>
										Admin
									</label>
								</div>
							</li>
							<li class='w-full   dark:'>
								<div class='flex items-center pl-3'>
									<input
									
										id='angular-checkbox-list'
										type='radio'
										value=''
										class='w-4 h-4 text-blue-600 bg-gray-100 rounded  focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:'
										checked={isPublished === true}
										onChange={()=> _handleRadio(event)}
									/>
									<label
										for='angular-checkbox-list'
										class='py-3 ml-2 w-full text-sm font-medium text-black '>
										Nombre d'équipe 
									</label>
								</div>
							</li>
							
						</ul>

						<button onClick={() => router.push('/dashBoard')} class='bg-orange-600 w-48 hover:bg-orange-600 text-white px-3 py-1 rounded text-lg focus:outline-none shadow'>
							Se Connecter
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default login;
