import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Header from './../src/components/Header';
import HomePage from '../src/components/HomePage';
import Login from './Login';

const Home: NextPage = () => {
	return (
		<div className='bg-gray-100'>
			<Head>
				<title>Maison Fondant</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Login />
		</div>
	);
};

export default Home;
