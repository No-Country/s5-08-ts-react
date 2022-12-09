import InputText from './Input/InputText'
import SelectInput from './Input/SelectInput'

interface Input {
	label: string
	type?: string
	specialType?: string
	name: string
}

interface CreateUserFormProps {
	inputs: Input[]
}

const people = [
	'Wade Cooper',
	'Arlene Mccoy',
	'Devon Webb',
	'Tom Cook',
	'Tanya Fox',
	'Hellen Schmidt',
	'Caroline Schultz',
	'Mason Heaney',
	'Claudie Smitham',
	'Emil Schaefer',
]

const CreateUserForm: React.FC<CreateUserFormProps> = ({ inputs }) => {
	const SpecialTypes = inputs.filter((input) => input.specialType)
	const NormalTypes = inputs.filter((input) => !input.specialType)

	console.log(SpecialTypes)

	return (
		<form className="my-10 flex flex-wrap items-center justify-center">
			{NormalTypes.map((input, index) => (
				<div key={index} className="flex flex-col gap-4 w-1/2 p-10">
					<label htmlFor="">{input.label}</label>
					<InputText name={input.name} type={input.type as string} />
				</div>
			))}
			{SpecialTypes.map((input, index) => (
				<div key={index} className="flex flex-col gap-4 w-1/2 px-10">
					{input.specialType === 'select' ? (
						<SelectInput
							name={input.name}
							label={input.label}
							options={people}
						/>
					) : null}
				</div>
			))}
			<button
				type="submit"
				className="bg-[#051247] text-white p-3 rounded-xl text-xl w-1/4 my-10"
			>
				Agregar
			</button>
		</form>
	)
}

export default CreateUserForm
