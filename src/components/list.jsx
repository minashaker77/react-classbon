import Item from "./item";

const List = ({list}) => {
	return (
		<ul>
			{
				list.map(({id, ...item}) => (
					<Item key={id} {...item} />
				))
				// list.map(function (item , index) {
				// 	return <li key={index}>{item.title}</li>
				// })
			}
		</ul>
	);
};
export default List;
