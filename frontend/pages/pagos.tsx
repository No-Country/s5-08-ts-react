import { ReactElement } from 'react';
import { AdminLayout } from '../components/layouts';
import { user1 } from './index';

export default function Pagos() {
	return (
		<AdminLayout User={user1}>
			<h2>Pagos works</h2>
		</AdminLayout>
	);
}
