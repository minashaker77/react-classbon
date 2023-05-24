
const Search = ({search , onSearch}) => {

	const handleChange = (event) => {
		onSearch(event);
	};
	return (
		<div>
			<label htmlFor="search">Search</label>
			<input
				onChange={handleChange}
				type="text"
				id="search"
				value={search}
			/>
		</div>
	);
};

export default Search;
