
const InputWithLabel = ({id,label,value , onInputChange}) => {

	const handleChange = (event) => {
		onInputChange(event);
	};
	return (
		<>
			<label htmlFor={id}>{label}</label>
			<input
				onChange={handleChange}
				type="text"
				id={id}
				value={value}
			/>
		</>
	);
};

export default InputWithLabel;
