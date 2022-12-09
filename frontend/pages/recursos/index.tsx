import Image from 'next/image'
import RecursosLayout from '../../components/layouts/RecursosLayout'
import CustomSelect from '../../components/UI/CustomSelect'

import libro1 from '../../public/libro1.png'
import libro2 from '../../public/libro2.png'
import libro3 from '../../public/libro3.png'
import libro4 from '../../public/libro3.jpg'
import libro6 from '../../public/libro6.png'
import libro7 from '../../public/libro7.jpeg'
import libro8 from '../../public/libro8.jpg'

const BookCard = ({ image }: any) => {
	return (
		<div className="w-[300px] h-[400px] p-4 border border-[#465EF4] flex flex-col gap-10 rounded-xl">
			<div className="w-full h-[80%] flex items-center justify-center">
				<Image
					src={image}
					alt="book image"
					className="object-cover object-center"
					height={300}
				/>
			</div>
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
		image: libro1,
	},
	{
		id: 2,
		title: 'El principito',
		image: libro2,
	},
	{
		id: 3,
		title: 'El principito',
		image: libro3,
	},
	{
		id: 4,
		title: 'El principito',
		image: libro4,
	},
	{
		id: 5,
		title: 'El principito',
		image: libro7,
	},
	{
		id: 6,
		title: 'El principito',
		image: libro8,
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
							<BookCard key={book.id} image={book.image} />
						))}
					</div>
				</div>
			</RecursosLayout>
		</div>
	)
}

export default recursos
