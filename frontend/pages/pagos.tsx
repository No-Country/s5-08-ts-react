import { ReactElement } from 'react';
import AdminLayout from '../components/admin/AdminLayout';

export default function Pagos() {
	return <div>Pagos</div>;
}

Pagos.getLayout = function getLayout(page: ReactElement) {
	return <AdminLayout>{page}</AdminLayout>;
};
