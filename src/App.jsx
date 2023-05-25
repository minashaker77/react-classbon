// const title = "React";
import List from "./components/list";
import InputWithLabel from "./components/InputWithLabel";
import useStorageState from "./hooks/useStorageState";
import { useEffect, useReducer } from "react";

const welcome = {
	greeting: "Hi",
	title: "React",
};

const storiesReducer = (state, action) => {
	switch (action.type) {
		case "STORIES_FETCH_INIT":
			return {
				...state,
				isLoading: true,
				isError: false,
			};
		case "STORIES_FETCH_SUCCESS":
			return {
				...state,
				isLoading: false,
				isError: false,
				data: action.payload,
			};
		case "STORIES_FETCH_FAILURE":
			return {
				...state,
				isLoading: false,
				isError: true,
			};
		case "REMOVE_STORIES":
			return {
				...state,
				data: state.data.filter((story) => story.id !== action.payload),
			};
		default:
			return state;
	}
};
const API_ENDPOINT = "https://react-mini-projects-api.classbon.com/Story/list";

const App = () => {
	const [stories, dispatchStories] = useReducer(storiesReducer, {
		data: [],
		isLoading: false,
		isError: false,
	});
	const [searchTerm, setSearchTerm] = useStorageState("search", "");

	useEffect(() => {
		if (!searchTerm) return;
		dispatchStories({ type: "STORIES_FETCH_INIT" });
		fetch(`${API_ENDPOINT}?query=${searchTerm}`)
			.then((response) => response.json())
			.then((stories) => {
				dispatchStories({ type: "STORIES_FETCH_SUCCESS", payload: stories });
			})
			.catch(() => dispatchStories({ type: "STORIES_FETCH_FAILURE" }));
	}, [searchTerm]);

	const handleRemoveStory = (id) => {
		dispatchStories({ type: "REMOVE_STORIES", payload: id });
		// dispatchStories({type:'SET_STORIES' , payload:newStories});
	};
	const handleSearch = (event) => {
		setSearchTerm(event.target.value);
	};

	// const searchStories = stories.data.filter((story) =>
	// 	story.title.toLowerCase().includes(searchTerm.toLowerCase())
	// );

	// if(isLoading){
	// 	return <p>Loading ...</p>
	// }

	return (
		<div>
			<h1>
				{welcome.greeting} {welcome.title}
			</h1>
			<InputWithLabel
				id="search"
				label="Search"
				value={searchTerm}
				onInputChange={handleSearch}
				isFocused={true}
			/>

			{stories.isError && <p>Something went wrong</p>}

			{stories.isLoading ? (
				<p>Loading ...</p>
			) : (
				<List list={stories.data} onRemoveItem={handleRemoveStory} />
			)}
		</div>
	);
};

export default App;
