import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Header from './../src/components/Header';
import HomePage from '../src/components/HomePage';

const Home: NextPage = () => {
	return (
		<div className='bg-gray-100'>
			<Head>
				<title>Maison Fondant</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header />
			<HomePage />
		</div>
	);
};

export default Home;
