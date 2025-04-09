import CrossShadow from "./CrossShadow";

export default function Button01(props) {
	return (
		<button
			className="relative py-1 px-6 bg-white rounded-md shadow-xl"
			onClick={props.doclick}
		>
			<CrossShadow>{props.texts}</CrossShadow>
		</button>
	);
}
