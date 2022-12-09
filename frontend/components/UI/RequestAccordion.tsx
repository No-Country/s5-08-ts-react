import { Disclosure } from '@headlessui/react'
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid'
import Image from 'next/image'
import downArrow from '../../public/icons/down-arrow.svg'

import calendarEditIcon from '../../public/icons/calendar-edit.svg'
import cancelIcon from '../../public/icons/close.svg'
import calendarPlusIcon from '../../public/icons/calendar-plus.svg'

interface AccordionProps {
	title: string
}

const columns: GridColDef[] = [
	{
		field: 'fullname',
		headerName: 'Nombre y Apellido',
		editable: true,
		align: 'center',
		headerAlign: 'center',
		flex: 1,
	},
	{
		field: 'student',
		headerName: 'Alumno',
		align: 'center',
		headerAlign: 'center',
		flex: 1,
	},
	{
		field: 'date',
		headerName: 'Fecha',
		editable: true,
		align: 'center',
		headerAlign: 'center',
		flex: 1,
	},
	{
		field: 'hour',
		headerName: 'Hora',
		editable: true,
		align: 'center',
		headerAlign: 'center',
		flex: 1,
	},
	{
		field: 're-schedule',
		headerName: 'Re-agendar',
		width: 100,
		renderCell: () => (
			<button className="w-6 h-6">
				<Image src={calendarEditIcon} alt="calendar edit icon" />
			</button>
		),
		align: 'center',
		headerAlign: 'center',
	},
	{
		field: 'cancel',
		headerName: 'Cancelar',
		width: 100,
		renderCell: () => (
			<button className="w-6 h-6">
				<Image src={cancelIcon} alt="cancel icon" />
			</button>
		),
		align: 'center',
		headerAlign: 'center',
	},
	{
		field: 'addInCalendar',
		headerName: 'Agregar en calendario',
		width: 200,
		renderCell: () => (
			<button className="w-6 h-6">
				<Image src={calendarPlusIcon} alt="cancel icon" />
			</button>
		),
		align: 'center',
		headerAlign: 'center',
	},
]

const rows: GridRowsProp = [
	{
		id: 1,
		fullname: 'Fernanda Giogio',
		student: 'Laura Giogio',
		date: '18/11/2022',
		hour: '16:00 HS',
	},
	{
		id: 2,
		fullname: 'Alfredo Villegas',
		student: 'Paola Villegas',
		date: '27/11/2022',
		hour: '11:00 HS',
	},
]

const RequestAccordion: React.FC<AccordionProps> = ({ title }) => {
	return (
		<div className="w-full px-4 mt-8">
			<div className="mx-auto w-3/4 rounded-2xl bg-white p-2">
				<Disclosure>
					{({ open }) => (
						<>
							<Disclosure.Button
								className={
									'flex w-full items-center justify-between border rounded-lg p-10 text-left text-sm font-medium focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75 ' +
									(open ? 'section-gradient text-white' : '')
								}
							>
								<span className="text-3xl font-medium">{title}</span>

								<div
									className={`${
										open ? 'rotate-180 transform' : ''
									} h-5 w-5 transition-all`}
								>
									<Image src={downArrow} alt="down arrow" />
								</div>
							</Disclosure.Button>
							<Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
								<div className="h-[250px] w-full">
									<DataGrid
										rows={rows}
										columns={columns}
										disableSelectionOnClick
										checkboxSelection
									/>
								</div>
							</Disclosure.Panel>
						</>
					)}
				</Disclosure>
			</div>
		</div>
	)
}

export default RequestAccordion
