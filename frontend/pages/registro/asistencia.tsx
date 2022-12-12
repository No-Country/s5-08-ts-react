import { useState } from 'react'
import Calendar from '../../components/Calendar/Calendar'
import RegisterLayout from '../../components/layouts/RegisterLayout'
import CustomComobox from '../../components/UI/CustomComobox'

const Asistencia = () => {
	const [selectedStudent, setSelectedStudent] = useState('')
	const [trimestre, setTrimestre] = useState(1)

	return (
		<div>
			<RegisterLayout>
				<div className="flex items-center justify-between">
					<h1 className="text-2xl">Registro de Asistencias</h1>
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
				<div className="py-10 flex flex-col gap-10">
					<h1 className="text-2xl">
						Selecciona el dia y modifica la asistencia del alumno
					</h1>
					<div className="flex gap-20">
						<div className="flex flex-col gap-10">
							<Calendar days="long" />
							<div className="flex w-full justify-around">
								<div className="flex items-center justify-center gap-4">
									<div className="w-4 h-4 bg-green-600 rounded-full" />
									<span className="text-xl">Asistencias</span>
								</div>
								<div className="flex items-center justify-center gap-4">
									<div className="w-4 h-4 bg-red-600 rounded-full" />
									<span className="text-xl">Inasistencias</span>
								</div>
							</div>
						</div>
						<div className="flex flex-col items-center w-80 gap-16">
							<div className="flex items-center gap-10">
								<div className="w-4 h-4 bg-red-600 rounded-full" />
								<span className="text-2xl">Inasistencia</span>
							</div>
							<span className="text-xl">Asignaturas con faltas</span>
							<ul className="flex flex-col gap-4">
								<li className="text-lg">- Matematica</li>
								<li className="text-lg">- Castellano</li>
								<li className="text-lg">- Educacion Fisica</li>
							</ul>
							<button className="w-3/4 bg-[#465EF4] rounded-xl text-white text-lg font-medium py-3">
								Reportar Inasistencia
							</button>
						</div>
					</div>
				</div>
			</RegisterLayout>
		</div>
	)
}

export default Asistencia
