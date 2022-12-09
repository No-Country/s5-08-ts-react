import jardinIllusion from '../../../public/illustrations/jardin-illustration.svg'
import primariaIllusion from '../../../public/illustrations/primaria-illustration.svg'
import secundariaIllusion from '../../../public/illustrations/secundaria-illustration.svg'
import SectionOption from '../../../components/UI/SectionOption'

const index = () => {
	return (
		<div className="w-full h-full flex flex-col gap-10 py-10">
			<div className="flex flex-col gap-10">
				<h1 className="text-4xl font-medium">Gestion de Secciones</h1>
				<p className="text-xl">Selecciona el nivel de educación</p>
			</div>
			<div className="flex flex-col gap-14">
				<SectionOption title="Jardin" illustration={jardinIllusion} />
				<SectionOption title="Primaria" illustration={primariaIllusion} />
				<SectionOption title="Secundaria" illustration={secundariaIllusion} />
			</div>
		</div>
	)
}

export default index
