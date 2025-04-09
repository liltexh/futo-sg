export default function CrossShadow({ children }) {
	return (
		<div className="after:content-[''] after:absolute after:-bottom-1.5 after:-right-1.5 after:w-full after:h-full after:bg-[url('/src/assets/images/OC1Y8P0.jpg')] after:mix-blend-multiply after:bg-cover after:bg-center after:-z-10  after:saturate-200 after:border after:rounded-md after:border-gray-400">
			{children}
		</div>
	);
}
