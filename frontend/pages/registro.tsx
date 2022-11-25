import { AdminLayout } from '../components/layouts';
import { user1 } from './index';

export default function Registro() {
	return (
		<AdminLayout User={user1}>
			<h2>Registro works</h2>
		</AdminLayout>
	);
}
