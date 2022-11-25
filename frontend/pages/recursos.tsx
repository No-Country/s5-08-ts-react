import { ReactElement } from 'react';
import { user1 } from '.';
import { AdminLayout } from '../components/layouts';

export default function Recursos() {
	return (
		<AdminLayout User={user1}>
			<h2>Materiales works</h2>
		</AdminLayout>
	);
}
