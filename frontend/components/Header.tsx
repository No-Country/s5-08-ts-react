import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Header.module.css';

export default function Header() {
	return (
		<header className={styles.header}>
			<div className='header__container'>
				<Link href='/'>
					<Image src='/logo.png' alt='logo' width={300} height={50} />
				</Link>

				<nav className={styles.nav}>
					<button className={styles.button}>
						<Link href='/'>Inicio</Link>
					</button>
					<button className={styles.nav__button}>
						<Link href='/gestion'>Gestion</Link>
					</button>
					<button className={styles.button}>
						<Link href='/registro'>Registro</Link>
					</button>
					<button className={styles.button}>
						<Link href='/materiales'>Materiales</Link>
					</button>
					<button className={styles.nav__button}>
						<Link href='/pagos'>Pagos</Link>
					</button>
				</nav>
			</div>
		</header>
	);
}
