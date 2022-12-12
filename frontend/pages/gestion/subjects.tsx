import Image from 'next/image'
import { useState } from 'react'
import plusIcon from '../../public/icons/plus-icon.svg'
import Accordion from '../../components/UI/Input/Accordion'

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

const Subjects = () => {
	const [selectTypeOfUser, setSelectTypeOfUser] = useState(0)

	return (
		<div className="w-full h-full flex flex-col gap-10 py-10">
			<div className="flex flex-col gap-10">
				<h1 className="text-4xl font-medium">Gestion de asignaturas</h1>
				<p className="text-xl">Selecciona el nivel de educacion</p>
				<div className="flex w-full items-center justify-between">
					<div className="w-2/5 flex">
						<button
							className={
								'hover:bg-blue-400 hover:text-white font-bold py-2 px-4 rounded-tl rounded-bl flex-1 border border-[#402EDB]' +
								(selectTypeOfUser === 0 ? ' bg-blue-400 text-white' : '')
							}
							onClick={() => setSelectTypeOfUser(0)}
						>
							Primaria
						</button>
						<button
							className={
								'hover:bg-blue-400 hover:text-white font-bold py-2 px-4 flex-1 border border-[#402EDB]' +
								(selectTypeOfUser === 1 ? ' bg-blue-400 text-white' : '')
							}
							onClick={() => setSelectTypeOfUser(1)}
						>
							Secundaria
						</button>
					</div>
					<button className="flex items-center gap-8">
						<Image src={plusIcon} alt="plus icon" />
						<span className="text-xl font-semibold text-[#05124787]">
							Agregar Asignatura
						</span>
					</button>
				</div>
			</div>
			<div className="w-full">
				{selectTypeOfUser === 0 ? (
					<>
						{gradosPrimaria.map((grado) => (
							<Accordion key={grado.id} title={grado.name} />
						))}
					</>
				) : (
					<>
						{gradosSecundaria.map((grado) => (
							<Accordion key={grado.id} title={grado.name} />
						))}
					</>
				)}
			</div>
		</div>
	)
}

export default Subjects
