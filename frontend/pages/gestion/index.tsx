import Image from 'next/image'
import { useState } from 'react'
import ManagementLayout from '../../components/layouts/ManagementLayout'
import pencilIcon from '../../public/icons/pencil-dark.svg'
import closeIcon from '../../public/icons/Close.svg'
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid'
import * as Dialog from '@radix-ui/react-dialog'
import plusIcon from '../../public/icons/plus.svg'
import crossIcon from '../../public/icons/cross-icon.svg'
import CreateUsersModal from '../../components/layouts/CreateUsersModal'

type userTypes = 0 | 1 | 2 | 3

const gestion = () => {
	const [activeUserType, setActiveUserType] = useState(0)

	const TypeOfUsers = {
		0: 'Profesores',
		1: 'Alumnos',
		2: 'Representantes',
		3: 'Administrativos',
	}

	const TypeOfTables = {
		0: [
			{ id: 1, fullname: 'Snow', phone: 123456789, email: 'asd@gmail.com' },
			{
				id: 2,
				fullname: 'Lannister',
				phone: 123456789,
				email: 'asd@gmail.com',
			},
			{
				id: 3,
				fullname: 'Lannister',
				phone: 123456789,
				email: 'asd@gmail.com',
			},
			{ id: 4, fullname: 'Stark', phone: 123456789, email: 'asd@gmail.com' },
			{
				id: 5,
				fullname: 'Targaryen',
				phone: 123456789,
				email: 'asd@gmail.com',
			},
		],
		1: [
			{ id: 8, fullname: 'Frances', phone: 123456789, email: 'asd@gmail.com' },
			{ id: 9, fullname: 'Roxie', phone: 123456789, email: 'asd@gmail.com' },
		],
		2: [
			{ id: 4, fullname: 'Stark', phone: 123456789, email: 'asd@gmail.com' },
			{
				id: 5,
				fullname: 'Targaryen',
				phone: 123456789,
				email: 'asd@gmail.com',
			},
			{ id: 6, fullname: 'Melisandre', phone: null, email: 'asd@gmail.com' },
		],
		3: [
			{
				id: 2,
				fullname: 'Lannister',
				phone: 123456789,
				email: 'asd@gmail.com',
			},
			{
				id: 3,
				fullname: 'Lannister',
				phone: 123456789,
				email: 'asd@gmail.com',
			},
			{ id: 4, fullname: 'Stark', phone: 123456789, email: 'asd@gmail.com' },
		],
	}

	const handleTypeOfTables = (type: userTypes) => {
		return TypeOfTables[type]
	}

	const rows: GridRowsProp = [
		{ id: 1, fullname: 'Snow', phone: 123456789, email: 'asd@gmail.com' },
		{ id: 2, fullname: 'Lannister', phone: 123456789, email: 'asd@gmail.com' },
		{ id: 3, fullname: 'Lannister', phone: 123456789, email: 'asd@gmail.com' },
		{ id: 4, fullname: 'Stark', phone: 123456789, email: 'asd@gmail.com' },
		{ id: 5, fullname: 'Targaryen', phone: 123456789, email: 'asd@gmail.com' },
		{ id: 6, fullname: 'Melisandre', phone: null, email: 'asd@gmail.com' },
		{ id: 7, fullname: 'Clifford', phone: 123456789, email: 'asd@gmail.com' },
		{ id: 8, fullname: 'Frances', phone: 123456789, email: 'asd@gmail.com' },
		{ id: 9, fullname: 'Roxie', phone: 123456789, email: 'asd@gmail.com' },
	]

	const columns: GridColDef[] = [
		{
			field: 'fullname',
			headerName: 'Nombre y Apellido',
			width: 300,
			editable: true,
			align: 'center',
			headerAlign: 'center',
			flex: 1,
		},
		{
			field: 'id',
			headerName: 'ID',
			width: 90,
			align: 'center',
			headerAlign: 'center',
			flex: 1,
		},
		{
			field: 'phone',
			headerName: 'Telefono',
			width: 150,
			editable: true,
			align: 'center',
			headerAlign: 'center',
			flex: 1,
		},
		{
			field: 'email',
			headerName: 'Correo',
			width: 250,
			editable: true,
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
					<Image src={pencilIcon} alt="edit icon" />
				</button>
			),
			align: 'center',
			headerAlign: 'center',
		},
		{
			field: 'delete',
			headerName: 'Eliminar',
			width: 150,
			renderCell: () => (
				<button className="w-6 h-6">
					<Image src={closeIcon} alt="close icon" />
				</button>
			),
			align: 'center',
			headerAlign: 'center',
		},
	]

	return (
		<div className="w-full h-full flex flex-col gap-10">
			<ManagementLayout>
				<div className="w-full flex flex-col gap-4">
					<h2 className="text-2xl">Selecciona el tipo de usuario</h2>
					<div className="w-full flex">
						<button
							className={
								'hover:bg-blue-400 hover:text-white font-bold py-2 px-4 rounded-tl rounded-bl flex-1 border border-[#402EDB]' +
								(activeUserType === 0 ? ' bg-blue-500 text-white' : '')
							}
							onClick={() => setActiveUserType(0)}
						>
							Profesores
						</button>
						<button
							className={
								'hover:bg-blue-400 hover:text-white font-bold py-2 px-4 flex-1 border border-[#402EDB]' +
								(activeUserType === 1 ? ' bg-blue-500 text-white' : '')
							}
							onClick={() => setActiveUserType(1)}
						>
							Alumnos
						</button>
						<button
							className={
								'hover:bg-blue-400 hover:text-white font-bold py-2 px-4 flex-1 border border-[#402EDB]' +
								(activeUserType === 2 ? ' bg-blue-500 text-white' : '')
							}
							onClick={() => setActiveUserType(2)}
						>
							Representantes
						</button>
						<button
							className={
								'hover:bg-blue-400 hover:text-white font-bold py-2 px-4 flex-1 border border-[#402EDB]' +
								(activeUserType === 3 ? ' bg-blue-500 text-white' : '')
							}
							onClick={() => setActiveUserType(3)}
						>
							Administrativos
						</button>
					</div>
				</div>

				<div className="flex flex-col gap-10">
					<div className="w-full flex justify-end">
						<Dialog.Root>
							<Dialog.Trigger asChild>
								<button className="flex items-center gap-8">
									<Image src={plusIcon} alt="plus icon" />
									<span className="text-xl font-semibold text-[#05124787]">
										Agregar Usuario
									</span>
								</button>
							</Dialog.Trigger>
							<Dialog.Portal>
								<Dialog.Overlay className="bg-black/50 fixed top-0 left-0 right-0 bottom-0 grid place-items-center ">
									<Dialog.Content className="w-3/5 bg-white p-8 rounded-xl overflow-y-auto h-[85%]">
										<Dialog.Trigger asChild className="float-right">
											<button className="flex items-center gap-8">
												<Image src={crossIcon} alt="exit icon" width={28} />
											</button>
										</Dialog.Trigger>
										<CreateUsersModal />
									</Dialog.Content>
								</Dialog.Overlay>
							</Dialog.Portal>
						</Dialog.Root>
					</div>
					<div className="flex items-center justify-between gap-10">
						<input
							type="text"
							className="border-b flex-1 focus:outline-none p-3"
							placeholder={'Buscar ' + TypeOfUsers[activeUserType as userTypes]}
						/>
					</div>
					<div className="h-[450px] w-full">
						<DataGrid
							rows={handleTypeOfTables(activeUserType as userTypes)}
							columns={columns}
							disableSelectionOnClick
							checkboxSelection
						/>
					</div>
				</div>
			</ManagementLayout>
		</div>
	)
}

export default gestion
