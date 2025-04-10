import React from "react";
import { NavLink } from "react-router-dom";

export default function CgpaPlaner() {
	return (
		<div className="flex flex-col h-[100%] lg:w-[80%] m-auto gap-12 mt-12">
			<section>
				<div className="flex items-center gap-4 py-4 bg-gray-500 w-fit px-8 rounded-md text-white">
					<span>
						<NavLink to="/edu/calculator">Cal</NavLink>
					</span>
					<span>Ai</span>
					<span>help</span>
				</div>
			</section>
			<section className="flex gap-10 flex-col lg:flex-row mt-auto">
				<div className="flex lg:flex-col lg:flex-1/4 gap-4">
					<div className="flex-1 bg-red-500 min-w-[20%] h-[24vh]">
						time table
					</div>
					<div className="flex-1 bg-gray-500 min-w-[20%]  h-[24vh]">
						palnner and progress chart
					</div>
				</div>
				<div className="flex-3/4 flex justify-center items-center">
					<div className="w-full bg-gray-500  aspect-video rounded-md">
						note pad
					</div>
				</div>
			</section>
		</div>
	);
}
