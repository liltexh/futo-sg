import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Roots() {
	return (
		<>
			<Outlet />
			<nav className="fixed bottom-4 w-[90%] rounded-md shadow-xl left-1/2 transform -translate-x-1/2 excess_z bg-white">
				<ul className="flex  justify-between p-4">
					<li>
						<NavLink to="/">Home</NavLink>
					</li>
					<li>
						<NavLink to="libary">Libary</NavLink>
					</li>

					<li>
						<NavLink to="profile">Profile</NavLink>
					</li>
				</ul>
			</nav>
		</>
	);
}
