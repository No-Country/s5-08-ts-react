import { ReactElement } from 'react';
import AdminLayout from '../components/admin/AdminLayout';

export default function Gestion() {
	return (
		<div>
			<h2>Gestion works</h2>
		</div>
	);
}

Gestion.getLayout = function getLayout(page: ReactElement) {
	return <AdminLayout>{page}</AdminLayout>;
};
