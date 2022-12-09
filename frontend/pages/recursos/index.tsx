import Image from 'next/image'
import RecursosLayout from '../../components/layouts/RecursosLayout'
import CustomSelect from '../../components/UI/CustomSelect'

const BookCard = () => {
	return (
		<div className="w-[300px] h-[400px] p-4 border border-[#465EF4] flex flex-col gap-10">
			<div className="w-full h-[80%] bg-gray-100"></div>
			<div className="w-full flex justify-between items-center">
				<button className="border border-[#465EF4] py-2 w-28 rounded-xl">
					Reservar
				</button>
				<button className="border border-[#465EF4] bg-[#465EF4] text-white py-2 w-28 rounded-xl">
					Ver
				</button>
			</div>
		</div>
	)
}

const books = [
	{
		id: 1,
		title: 'El principito',
	},
	{
		id: 1,
		title: 'El principito',
	},
	{
		id: 1,
		title: 'El principito',
	},
	{
		id: 1,
		title: 'El principito',
	},
	{
		id: 1,
		title: 'El principito',
	},
	{
		id: 1,
		title: 'El principito',
	},
	{
		id: 1,
		title: 'El principito',
	},
	{
		id: 1,
		title: 'El principito',
	},
	{
		id: 1,
		title: 'El principito',
	},
	{
		id: 1,
		title: 'El principito',
	},
	{
		id: 1,
		title: 'El principito',
	},
	{
		id: 1,
		title: 'El principito',
	},
]

const recursos = () => {
	return (
		<div>
			<RecursosLayout>
				<div className="pb-20">
					<div className="flex w-full justify-between">
						<h1 className="text-xl">
							Nuestra biblioteca cuenta con los siguientes libros
						</h1>
						<CustomSelect />
					</div>
					<div className="w-full grid grid-cols-3 place-items-center space-y-10">
						{books.map((book) => (
							<BookCard key={book.id} />
						))}
					</div>
				</div>
			</RecursosLayout>
		</div>
	)
}

export default recursos
