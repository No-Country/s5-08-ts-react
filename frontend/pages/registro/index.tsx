import calificacionesImage from '../../public/illustrations/calificacionesImage.svg'
import asistenciaImage from '../../public/illustrations/asistenciaImage.svg'
import RegisterLayout from '../../components/layouts/RegisterLayout'
import RegisterOptions from '../../components/UI/RegisterOptions'

const registro = () => {
	return (
		<div className="w-full h-full flex flex-col gap-10">
			<RegisterLayout>
				<div className="flex flex-col gap-14 mt-10 px-20">
					<RegisterOptions
						title="Calificaciones"
						illustration={calificacionesImage}
					/>
					<RegisterOptions title="Asistencia" illustration={asistenciaImage} />
				</div>
			</RegisterLayout>
		</div>
	)
}

export default registro
