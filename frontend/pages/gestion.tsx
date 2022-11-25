import { ReactElement } from 'react';
import { AdminLayout } from '../components/layouts';
import { user1 } from './index';

export default function Gestion() {
	return (
		<AdminLayout User={user1}>
			<h2>Gestion works</h2>
		</AdminLayout>
	);
}
