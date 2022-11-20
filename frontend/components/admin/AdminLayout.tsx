import Header from '../Header';
import Sidebar from '../Sidebar';

import styles from '../../styles/AdminLayout.module.css';

export default function AdminLayout({ children }: any) {
	return (
		<div className={styles.wrapper}>
			<Header />
			<div className={styles.container}>
				<Sidebar />
				<main className={styles.main}>{children}</main>
			</div>
		</div>
	);
}
