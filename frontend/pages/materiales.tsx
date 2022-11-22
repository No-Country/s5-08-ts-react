import { ReactElement } from 'react';
import AdminLayout from '../components/admin/AdminLayout';

export default function Materiales() {
	return <div>Materiales works</div>;
}

Materiales.getLayout = function getLayout(page: ReactElement) {
	return <AdminLayout>{page}</AdminLayout>;
};
