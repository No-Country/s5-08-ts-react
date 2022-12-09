import Image from 'next/image'
import { useRouter } from 'next/router'
import { Menu } from '@headlessui/react'

import minusSign from '../../../public/icons/minus-sign.svg'
import plusSign from '../../../public/icons/plus-sign.svg'
import downArrow from '../../../public/icons/down-arrow.svg'
import { useState } from 'react'
import Accordion from '../../../components/UI/Input/Accordion'
import plusIcon from '../../../public/icons/plus.svg'

const userTypes = {
	0: 'Profesores',
	1: 'Alumnos',
}

const gradosPrimaria = [
	{
		id: 1,
		name: '1° Grado',
	},
	{
		id: 2,
		name: '2° Grado',
	},
	{
		id: 3,
		name: '3° Grado',
	},
	{
		id: 4,
		name: '4° Grado',
	},
	{
		id: 5,
		name: '5° Grado',
	},
	{
		id: 6,
		name: '6° Grado',
	},
]

const gradosSecundaria = [
	{
		id: 1,
		name: '1° Año',
	},
	{
		id: 2,
		name: '2° Año',
	},
	{
		id: 3,
		name: '3° Año',
	},
	{
		id: 4,
		name: '4° Año',
	},
	{
		id: 5,
		name: '5° Año',
	},
	{
		id: 6,
		name: '6° Año',
	},
]

const secciones = [
	{
		id: 1,
		name: 'A',
	},
	{
		id: 2,
		name: 'B',
	},
	{
		id: 3,
		name: 'C',
	},
]

const salas = [
	{
		id: 1,
		name: '1er Año',
	},
	{
		id: 2,
		name: '2do Año',
	},
	{
		id: 3,
		name: '3er Año',
	},
	{
		id: 4,
		name: '4to Año',
	},
	{
		id: 5,
		name: '5to Año',
	},
	{
		id: 6,
		name: '6to Año',
	},
]

const primaria = () => {
	const router = useRouter()

	const sectionName =
		router.pathname.split('/')[3].charAt(0).toUpperCase() +
		router.pathname.split('/')[3].slice(1)

	return (
		<div className="w-full h-full flex flex-col gap-10 pt-10">
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
			<div className="w-full flex flex-wrap justify-around">
				{salas.map((sala) => (
					<div key={sala.id} className="w-1/3 h-[22rem]">
						<Menu>
							<Menu.Button className="section-gradient w-72 py-4 rounded-xl flex items-center justify-between px-6">
								<div className="flex flex-col">
									<span className="text-xl text-white font-medium">
										{sala.name}
									</span>
									<span className="text-white">{salas.length} secciones</span>
								</div>
								<Image src={downArrow} alt="down arrow" />
							</Menu.Button>
							<Menu.Items className="bg-white w-72 flex flex-col border border-[#465EF4] rounded-bl-xl rounded-br-xl divide-y">
								{secciones.map((seccion, index) => (
									<Menu.Item key={index}>
										<button className="py-4 text-center text-xl font-medium">
											Seccion {seccion.name}
										</button>
									</Menu.Item>
								))}
								<Menu.Item>
									<div className="flex items-center justify-between px-4">
										<button className="flex items-center gap-2">
											<Image src={minusSign} alt="minus sign" />
											<span className="py-4 text-center text-lg font-medium text-[#05124787]">
												Eliminar
											</span>
										</button>
										<button className="flex items-center gap-2">
											<span className="py-4 text-center text-lg font-medium text-[#05124787]">
												Agregar
											</span>
											<Image src={plusSign} alt="plus sign" />
										</button>
									</div>
								</Menu.Item>
							</Menu.Items>
						</Menu>
					</div>
				))}
			</div>
		</div>
	)
	// const [selectTypeOfUser, setSelectTypeOfUser] = useState(0)
	// const router = useRouter()

	// const sectionName =
	// 	router.pathname.split('/')[3].charAt(0).toUpperCase() +
	// 	router.pathname.split('/')[3].slice(1)

	// return (
	// 	<div className="w-full h-full flex flex-col gap-10 py-10">
	// 		<div className="flex flex-col gap-10">
	// 			<h1 className="text-4xl font-medium">
	// 				<button
	// 					onClick={() => router.back()}
	// 					className="hover:text-[#7B819D]"
	// 				>
	// 					Secciones
	// 				</button>{' '}
	// 				/ {sectionName}
	// 			</h1>
	// 			<p className="text-xl">Selecciona el nivel de educacion</p>
	// 			<div className="flex w-full items-center justify-between">
	// 				<div className="w-2/5 flex">
	// 					<button
	// 						className={
	// 							'hover:bg-blue-400 hover:text-white font-bold py-2 px-4 rounded-tl rounded-bl flex-1 border border-[#402EDB]' +
	// 							(selectTypeOfUser === 0 ? ' bg-blue-400 text-white' : '')
	// 						}
	// 						onClick={() => setSelectTypeOfUser(0)}
	// 					>
	// 						Profesores
	// 					</button>
	// 					<button
	// 						className={
	// 							'hover:bg-blue-400 hover:text-white font-bold py-2 px-4 flex-1 border border-[#402EDB]' +
	// 							(selectTypeOfUser === 1 ? ' bg-blue-400 text-white' : '')
	// 						}
	// 						onClick={() => setSelectTypeOfUser(1)}
	// 					>
	// 						Alumnos
	// 					</button>
	// 				</div>
	// 				<button className="flex items-center gap-8">
	// 					<Image src={plusIcon} alt="plus icon" />
	// 					<span className="text-xl font-semibold text-[#05124787]">
	// 						Agregar Usuario
	// 					</span>
	// 				</button>
	// 			</div>
	// 		</div>
	// 		<div className="w-full">
	// 			{selectTypeOfUser === 0 ? (
	// 				<>
	// 					{gradosPrimaria.map((grado) => (
	// 						<Accordion title={grado.name} />
	// 					))}
	// 				</>
	// 			) : (
	// 				<>
	// 					{gradosSecundaria.map((grado) => (
	// 						<Accordion title={grado.name} />
	// 					))}
	// 				</>
	// 			)}
	// 		</div>
	// 	</div>
	// )
}

export default primaria
