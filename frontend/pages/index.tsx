import { Typography } from '@mui/material';
import Head from 'next/head';
import Image from 'next/image';
import Router from 'next/router';
import { AdminLayout } from '../components/layouts';

export default function HomePage() {
	return (
		<AdminLayout User={user1}>
			<Typography variant='h2' component='h2'>
				Welcome to Next.js!
			</Typography>
		</AdminLayout>
	);
}

export const user1 = {
	FirstName: 'John',
	LastName: 'Doe',
	Email: 'wathever@mail.com',
};
