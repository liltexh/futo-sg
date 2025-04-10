export default function Button02(props) {
	return (
		<button
			className="bg-gray-500 w-full text-gray-50 py-2 rounded-md shadow-md"
			onClick={props.doclick}
		>
			{props.texts}
		</button>
	);
}
