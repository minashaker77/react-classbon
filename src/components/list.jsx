import Item from "./item";

const List = ({list , onRemoveItem}) => {
	return (
		<ul>
			{
				list.map((item) => (
					<Item key={item.id} {...item} onRemoveItem={onRemoveItem} />
				))
				// list.map(function (item , index) {
				// 	return <li key={index}>{item.title}</li>
				// })
			}
		</ul>
	);
};
export default List;
