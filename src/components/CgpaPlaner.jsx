import React from "react";
import { NavLink } from "react-router-dom";

export default function CgpaPlaner() {
	return (
		<>
			<div className="flex flex-col gap-10 justify-center">
				<section>
					<div className="flex items-center gap-4 py-4">
						<span>
							<NavLink to="/edu/calculator">Cal</NavLink>
						</span>
						<span>Ai</span>
						<span>help</span>
					</div>
				</section>
				<section className="flex justify-between items-center gap-4">
					<div className="flex-1/2 bg-gray-500  h-[20vh]"></div>
					<div className="flex-1/2 bg-gray-500  h-[20vh]"></div>
				</section>
				<section>
					<div className="w-full bg-gray-500 h-[40vh]"></div>
				</section>
			</div>
		</>
	);
}
