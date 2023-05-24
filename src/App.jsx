// const title = "React";
import List from "./components/list";
import Search from "./components/serach";
import { useState } from "react";

const welcome = {
	greeting: "Hi",
	title: "React",
};

const App = () => {
	const stories = [
		{
			id: 0,
			title: "React",
			url: "https://reactjs.org",
			author: "Reza Ahmadi",
			num_comments: 3,
			points: 4,
		},
		{
			id: 1,
			title: "Redux",
			url: "https://redux.js.org",
			author: "Mohammad",
			num_comments: 2,
			points: 5,
		},
	];
	const [searchTerm, setSearchTerm] = useState("Re");
	const handleSearch = (event) => {
		setSearchTerm(event.target.value);
	};
	const searchStories = stories.filter((story) =>
		story.title.toLowerCase().includes(searchTerm.toLowerCase())
	);
	return (
		<div>
			<h1>
				{welcome.greeting} {welcome.title}
			</h1>
			<Search search={searchTerm} onSearch={handleSearch} />
			<List list={searchStories} />
		</div>
	);
};

export default App;
