import {
	MenuIcon,
	SearchIcon,
	ShoppingCartIcon,
} from '@heroicons/react/outline';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { images } from './helper/utils/images/index';
import { icons } from './utils/icons/index';
import Link from 'next/link';
import HomePage from '../components/HomePage';
function Header() {
	const [openSideBar, setOpenSideBar] = useState(false);
	const router = useRouter();
	return (
		<>
			<header className='sticky top-0 z-50 '>
				<div className='flex justify-between items-center space-x-3 p-2 pl-6 h-16 w-full  bg-yellow-100 border border-red-900 text-white text-sm'>
					<div className='link flex items-center cursor-pointer'>
						{openSideBar ? (
							<button
								onClick={() => setOpenSideBar(false)}
								type='button'
								data-drawer-dismiss='drawer-navigation'
								aria-controls='drawer-navigation'
								class='  p-2 border-gray-300 text-black border'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 24 24'
									fill='currentColor'
									className='w-6 h-6'>
									<path
										fillRule='evenodd'
										d='M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z'
										clipRule='evenodd'
									/>
								</svg>
							</button>
						) : (
							<div className='p-2 border-gray-300  text-black border'>
								<MenuIcon
									className='h-6 '
									color='#352014'
									onClick={() => setOpenSideBar(true)}
								/>{' '}
							</div>
						)}
					</div>
					<div className='' style={{}}>
						{icons.logo_maison_fondant}
					</div>

					<div className='flex flex-row'>
						{icons.userProfile}
						<text className='  text-gray-900 px-2'>Profil</text>
						<svg
							class=' flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-700 dark:group-hover:text-white'
							fill='currentColor'
							viewBox='0 0 20 20'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								fill-rule='evenodd'
								d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
								clip-rule='evenodd'></path>
						</svg>
					</div>
				</div>
				<div
					id='drawer-navigation'
					class={`fixed z-40 h-screen  overflow-y-auto bg-white  ${
						openSideBar ? 'w-80 ' : 'w-0 '
					} dark:bg-yellow-100  border border-r-1 border-t-0 border-red-900`}
					tabindex='-1'
					aria-labelledby='drawer-navigation-label'>
					<div className='mb-12 border-b border-gray-100 pb-8'>
						<div className=' items-center w-full pl-28 pt-12 mb-5'>
							<Image
								onClick={() => router.push('/')}
								src={images.user}
								width={70}
								height={70}
								objectFit='contain'
								className='cursor-pointer rounded-full'
							/>
						</div>
						<text className=' text-center pl-24 text-gray-900'>
							khaled ghaffari
						</text>
					</div>
					<div class='py-4 overflow-y-auto'>
						<ul class='space-y-2'>
							<li>
								<a
									href='#'
									class='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-yellow-300 '>
									<svg
										aria-hidden='true'
										class='w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-700 group-hover:text-gray-900 dark:group-hover:text-white'
										fill='currentColor'
										viewBox='0 0 20 20'
										xmlns='http://www.w3.org/2000/svg'>
										<path d='M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z'></path>
										<path d='M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z'></path>
									</svg>
									<span class='ml-3 text-gray-900'>Tableau de bord</span>
								</a>
							</li>
							<li>
								<button
									type='button'
									class='flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group  dark:text-white dark:hover:bg-yellow-300 '
									aria-controls='dropdown-example'
									data-collapse-toggle='dropdown-example'
									data-target='/dropdown-example'>
									<svg
										aria-hidden='true'
										class='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-700 dark:group-hover:text-white'
										fill='currentColor'
										viewBox='0 0 20 20'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											fill-rule='evenodd'
											d='M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z'
											clip-rule='evenodd'></path>
									</svg>
									<span class='flex-1 ml-3 text-gray-900 text-left whitespace-nowrap'>
										Achat
									</span>
									<svg
										class=' flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-700 dark:group-hover:text-white'
										fill='currentColor'
										viewBox='0 0 20 20'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											fill-rule='evenodd'
											d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
											clip-rule='evenodd'></path>
									</svg>
								</button>
								<ul id='dropdown-example' class='hidden py-2 space-y-2'>
									<li>
										<a
											href='#'
											class='flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-yellow-300 '>
											Products
										</a>
									</li>
									<li>
										<a
											href='#'
											class='flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-yellow-300 '>
											Billing
										</a>
									</li>
									<li>
										<a
											href='#'
											class='flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-yellow-300 '>
											Invoice
										</a>
									</li>
								</ul>
							</li>
							<li>
								<a
									href='#'
									class='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-yellow-300 '>
									<svg
										aria-hidden='true'
										class='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-700 group-hover:text-gray-900 dark:group-hover:text-white'
										fill='currentColor'
										viewBox='0 0 20 20'
										xmlns='http://www.w3.org/2000/svg'>
										<path d='M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z'></path>
									</svg>
									<span class='flex-1 ml-3 text-gray-900 whitespace-nowrap'>
										Vente
									</span>
									{/* <span class='inline-flex items-center justify-center px-2 ml-3 text-gray-900 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300'>
								Pro
							</span> */}
									<svg
										class=' flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-700 dark:group-hover:text-white'
										fill='currentColor'
										viewBox='0 0 20 20'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											fill-rule='evenodd'
											d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
											clip-rule='evenodd'></path>
									</svg>
								</a>
							</li>

							<li>
								<a
									href='#'
									class='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-yellow-300 '>
									<svg
										aria-hidden='true'
										class='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-700 group-hover:text-gray-900 dark:group-hover:text-white'
										fill='currentColor'
										viewBox='0 0 20 20'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											fill-rule='evenodd'
											d='M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z'
											clip-rule='evenodd'></path>
									</svg>
									<span class='flex-1 ml-3 text-gray-900 whitespace-nowrap'>
										Products
									</span>
									<svg
										class=' flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-700 dark:group-hover:text-white'
										fill='currentColor'
										viewBox='0 0 20 20'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											fill-rule='evenodd'
											d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
											clip-rule='evenodd'></path>
									</svg>
								</a>
							</li>
							<li>
								<a
									href='#'
									class='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-yellow-300 '>
									<svg
										aria-hidden='true'
										class='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-700 group-hover:text-gray-900 dark:group-hover:text-white'
										fill='currentColor'
										viewBox='0 0 20 20'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											fill-rule='evenodd'
											d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z'
											clip-rule='evenodd'></path>
									</svg>
									<span class='flex-1 ml-3 text-gray-900 whitespace-nowrap'>
										Users
									</span>
									<svg
										class=' flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-700 dark:group-hover:text-white'
										fill='currentColor'
										viewBox='0 0 20 20'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											fill-rule='evenodd'
											d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
											clip-rule='evenodd'></path>
									</svg>
								</a>
							</li>
							<li>
								<Link
									onClick={() => router.push('/Login')}
									href='/Login'
									class='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-yellow-300 '>
									<svg
										aria-hidden='true'
										class='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-700 group-hover:text-gray-900 dark:group-hover:text-white'
										fill='currentColor'
										viewBox='0 0 20 20'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											fill-rule='evenodd'
											d='M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z'
											clip-rule='evenodd'></path>
									</svg>
									<span class='flex-1 ml-3 text-gray-900 whitespace-nowrap'>
										Sign out
									</span>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</header>
			{/* <HomePage /> */}
		</>
	);
}

export default Header;
