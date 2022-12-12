import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid'
import Image from 'next/image'
import RequestManagementLayout from '../../../components/layouts/RequestManagementLayout'
import calendarEditIcon from '../../../public/icons/calendar-edit.svg'
import calendarPlusIcon from '../../../public/icons/calendar-plus.svg'
import cancelIcon from '../../../public/icons/cross-icon.svg'

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
		width: 150,
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
		width: 150,
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
		width: 250,
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

const Aceptadas = () => {
	return (
		<div className="w-full h-full flex flex-col gap-10">
			<RequestManagementLayout>
				<div className="h-[450px] w-full">
					<DataGrid
						rows={rows}
						columns={columns}
						disableSelectionOnClick
						checkboxSelection
					/>
				</div>
			</RequestManagementLayout>
		</div>
	)
}

export default Aceptadas
