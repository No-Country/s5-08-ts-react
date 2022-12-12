import { useRouter } from 'next/router'

const Secundaria = () => {
	const router = useRouter()

	const sectionName =
		router.pathname.split('/')[3].charAt(0).toUpperCase() +
		router.pathname.split('/')[3].slice(1)

	return (
		<div className="w-full h-full flex flex-col gap-10 py-10">
			<div className="flex flex-col gap-10">
				<h1 className="text-4xl font-medium">
					<button
						onClick={() => router.back()}
						className="hover:text-[#7B819D]"
					>
						Secciones
					</button>{' '}
					/ {sectionName}
				</h1>
				<p className="text-xl">Selecciona la opcion de tu preferencia</p>
			</div>
		</div>
	)
}

export default Secundaria
