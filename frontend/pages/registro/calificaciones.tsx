import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid'
import Image from 'next/image'
import { useState } from 'react'
import RegisterLayout from '../../components/layouts/RegisterLayout'
import CustomComobox from '../../components/UI/CustomComobox'
import pencilIcon from '../../public/icons/pencil-dark.svg'
import eyeIcon from '../../public/icons/eye.svg'

type Component = 1 | 2 | 3

const typeOfTrimestre = {
	1: 'Primer Trimestre',
	2: 'Segundo Trimestre',
	3: 'Tercer Trimestre',
}

const rows: GridRowsProp = [
	{
		id: 1,
		asignatura: 'Ingles',
		e1: 0,
		e2: 1,
		e3: 0,
		e4: 1,
		e5: 3,
		e6: 5,
		'nota-final': 10,
	},
	{
		id: 2,
		asignatura: 'Castellano',
		e1: 0,
		e2: 1,
		e3: 0,
		e4: 1,
		e5: 3,
		e6: 5,
		'nota-final': 10,
	},
	{
		id: 3,
		asignatura: 'Ciencias Sociales',
		e1: 0,
		e2: 1,
		e3: 0,
		e4: 1,
		e5: 3,
		e6: 5,
		'nota-final': 10,
	},
	{
		id: 4,
		asignatura: 'Matematica',
		e1: 0,
		e2: 1,
		e3: 0,
		e4: 1,
		e5: 3,
		e6: 5,
		'nota-final': 10,
	},
	{
		id: 5,
		asignatura: 'Educacion Fisica',
		e1: 0,
		e2: 1,
		e3: 0,
		e4: 1,
		e5: 3,
		e6: 5,
		'nota-final': 10,
	},
	{
		id: 6,
		asignatura: 'Arte',
		e1: null,
		e2: 1,
		e3: 0,
		e4: 1,
		e5: 3,
		e6: 5,
		'nota-final': 10,
	},
	{
		id: 7,
		asignatura: 'Biologia',
		e1: 0,
		e2: 1,
		e3: 0,
		e4: 1,
		e5: 3,
		e6: 5,
		'nota-final': 10,
	},
]

const columns: GridColDef[] = [
	{
		field: 'asignatura',
		headerName: 'Asignatura',
		width: 300,
		editable: true,
		align: 'center',
		headerAlign: 'center',
		flex: 1,
	},
	{
		field: 'e1',
		headerName: 'E1',
		width: 90,
		align: 'center',
		headerAlign: 'center',
		flex: 1,
	},
	{
		field: 'e2',
		headerName: 'E2',
		width: 90,
		align: 'center',
		headerAlign: 'center',
		flex: 1,
	},
	{
		field: 'e3',
		headerName: 'E3',
		width: 90,
		align: 'center',
		headerAlign: 'center',
		flex: 1,
	},
	{
		field: 'e4',
		headerName: 'E4',
		width: 90,
		align: 'center',
		headerAlign: 'center',
		flex: 1,
	},
	{
		field: 'e5',
		headerName: 'E5',
		width: 90,
		align: 'center',
		headerAlign: 'center',
		flex: 1,
	},
	{
		field: 'e6',
		headerName: 'E6',
		width: 90,
		align: 'center',
		headerAlign: 'center',
		flex: 1,
	},
	{
		field: 'edit',
		headerName: 'Editar',
		width: 150,
		renderCell: () => (
			<button className="w-6 h-6">
				<Image src={pencilIcon} alt="Editar" />
			</button>
		),
		align: 'center',
		headerAlign: 'center',
	},
	{
		field: 'nota-final',
		headerName: 'Nota Final',
		width: 250,
		editable: true,
		align: 'center',
		headerAlign: 'center',
		flex: 1,
	},
	{
		field: 'publicar',
		headerName: 'Publicar',
		width: 150,
		renderCell: () => (
			<button className="w-6 h-6">
				<Image src={eyeIcon} alt="Editar" />
			</button>
		),
		align: 'center',
		headerAlign: 'center',
	},
]

const calificaciones = () => {
	const [selectedStudent, setSelectedStudent] = useState('')
	const [trimestre, setTrimestre] = useState(1)

	return (
		<div>
			<RegisterLayout>
				<div className="flex items-center justify-between">
					<h1 className="text-2xl">Registro de calificaciones</h1>
					<div className="flex items-center gap-8">
						<h2 className="text-2xl">Alumno</h2>
						<div className="w-64">
							<CustomComobox setParentState={setSelectedStudent} />
						</div>
					</div>
				</div>
				{selectedStudent && (
					<div className="flex gap-16">
						<h1 className="text-xl">{selectedStudent}: </h1>
						<div>
							<h3 className="text-lg">Grado: 5°</h3>
							<h3 className="text-lg">Seccion: A</h3>
						</div>
					</div>
				)}
				<div className="w-3/4 flex flex-col gap-4">
					<h2 className="text-2xl">Selecciona el tipo de usuario</h2>
					<div className="w-full flex">
						<button
							className={
								'hover:bg-blue-400 hover:text-white font-bold py-2 px-4 rounded-tl rounded-bl flex-1 border border-[#402EDB]' +
								(trimestre === 1 ? ' bg-blue-500 text-white' : '')
							}
							onClick={() => setTrimestre(1)}
						>
							Primer Trimestre
						</button>
						<button
							className={
								'hover:bg-blue-400 hover:text-white font-bold py-2 px-4 flex-1 border border-[#402EDB]' +
								(trimestre === 2 ? ' bg-blue-500 text-white' : '')
							}
							onClick={() => setTrimestre(2)}
						>
							Segundo Trimestre
						</button>
						<button
							className={
								'hover:bg-blue-400 hover:text-white font-bold py-2 px-4 flex-1 border border-[#402EDB]' +
								(trimestre === 3 ? ' bg-blue-500 text-white' : '')
							}
							onClick={() => setTrimestre(3)}
						>
							Tercer Trimestre
						</button>
					</div>
				</div>
				<div className="h-[450px] w-full">
					<DataGrid
						rows={rows}
						columns={columns}
						disableSelectionOnClick
						checkboxSelection
					/>
				</div>
			</RegisterLayout>
		</div>
	)
}

export default calificaciones
