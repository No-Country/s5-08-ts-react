import { ReactElement } from 'react';
import AdminLayout from '../components/admin/AdminLayout';

export default function Registro() {
	return <div>Enter your code here</div>;
}

Registro.getLayout = (page: ReactElement) => <AdminLayout>{page}</AdminLayout>;
