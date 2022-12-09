import Calendar from '../Calendar/Calendar'
import InputText from './Input/InputText'
import { hours } from '../../utils/timeData'

const CreateRequestForm = () => {
	return (
		<form className="pt-10 flex flex-col gap-8">
			<div className="flex flex-col gap-4 w-1/2">
				<label htmlFor="">Nombre</label>
				<InputText name="name" />
			</div>
			<div className="w-full flex h-full gap-8">
				<div className="flex-1">
					<Calendar days="short" />
				</div>
				<div className="flex-1 flex flex-col gap-4">
					<div>
						<h3 className="text-2xl font-medium">Horarios</h3>
						<p className="text-lg">Selecciona el horario para la reunión</p>
					</div>
					<div className="grid grid-cols-2 place-items-center gap-y-2 overflow-y-auto h-[65%]">
						{hours.map((hour, index) => {
							return (
								<div
									key={index}
									className="w-3/4 flex items-center justify-center border border-[#465EF4] py-2 rounded-xl"
								>
									<label htmlFor={hour}>{hour}</label>
								</div>
							)
						})}
					</div>
				</div>
			</div>
			<div className="flex flex-col gap-4 pb-10">
				<h3 className="text-2xl">Motivo de la reunion</h3>
				<textarea
					name=""
					id=""
					cols={30}
					rows={4}
					className="focus:outline-none border border-[#465EF4] rounded-xl"
				></textarea>
			</div>
			<div className="flex w-full justify-between">
				<button className="bg-white text-[#051247] border border-[#051247] p-3 rounded-xl text-xl w-64 my-10">
					Cancelar
				</button>
				<button className="bg-[#051247] text-white p-3 rounded-xl text-xl w-64 my-10">
					Enviar
				</button>
			</div>
		</form>
	)
}

export default CreateRequestForm
