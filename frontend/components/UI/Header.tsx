import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
	return (
		<header>
			<div className='header__container'>
				<Link href='/'>
					<Image src='/logo.png' alt='logo' width={300} height={50} />
				</Link>

				<nav>
					<button>
						<Link href='/'>Inicio</Link>
					</button>
					<button>
						<Link href='/gestion'>Gestion</Link>
					</button>
					<button>
						<Link href='/registro'>Registro</Link>
					</button>
					<button>
						<Link href='/materiales'>Materiales</Link>
					</button>
					<button>
						<Link href='/pagos'>Pagos</Link>
					</button>
				</nav>
			</div>
		</header>
	);
}
