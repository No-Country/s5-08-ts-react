import { useRouter } from 'next/router'
import { useState } from 'react'

type userTypes = 0 | 1 | 2 | 3

const ManagementLayout = ({ children }: any) => {
	const [activeSubPage, setActiveSubPage] = useState(0)
	const router = useRouter()

	const changePage = {
		0: '/gestion',
		1: '/gestion/sections',
		2: '/gestion/subjects',
		3: '/gestion/requests',
	}

	const handleNavigation = (pageIndex: number) => {
		setActiveSubPage(pageIndex)

		router.push(changePage[pageIndex as userTypes], {})
	}

	return (
		<>
			<div className="w-full flex flex-col gap-4">
				<h2 className="text-2xl">Seleccione el area que desea gestionar</h2>
				<div className="w-full flex">
					<button
						className={
							'hover:bg-blue-400 hover:text-white font-bold py-2 px-4 rounded-tl rounded-bl flex-1 border border-[#402EDB]' +
							(activeSubPage === 0 ? ' bg-blue-500 text-white' : '')
						}
						onClick={() => handleNavigation(0)}
					>
						Usuarios
					</button>
					<button
						className={
							'hover:bg-blue-400 hover:text-white font-bold py-2 px-4 flex-1 border border-[#402EDB]' +
							(activeSubPage === 1 ? ' bg-blue-500 text-white' : '')
						}
						onClick={() => handleNavigation(1)}
					>
						Secciones
					</button>
					<button
						className={
							'hover:bg-blue-400 hover:text-white font-bold py-2 px-4 flex-1 border border-[#402EDB]' +
							(activeSubPage === 2 ? ' bg-blue-500 text-white' : '')
						}
						onClick={() => handleNavigation(2)}
					>
						Asignaturas
					</button>
					<button
						className={
							'hover:bg-blue-400 hover:text-white font-bold py-2 px-4 flex-1 border border-[#402EDB]' +
							(activeSubPage === 3 ? ' bg-blue-500 text-white' : '')
						}
						onClick={() => handleNavigation(3)}
					>
						Solicitudes
					</button>
				</div>
			</div>
			{children}
		</>
	)
}

export default ManagementLayout
