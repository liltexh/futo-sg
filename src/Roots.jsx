import { NavLink, Outlet } from "react-router-dom";
import Hovbutton01 from "./components/Hovbutton01";
import { home, library, profile } from "./tools/icons";
export default function Roots() {
	return (
		<>
			<Outlet />
			<nav className="fixed bottom-4 w-[90%] lg:w-[30%] rounded-md shadow-xl left-1/2 transform -translate-x-1/2 excess_z bg-white">
				<ul className="flex  justify-between p-2">
					<li>
						<NavLink to="/">
							<Hovbutton01
								icon={home}
								info="Home"
								width="30px"
							/>
						</NavLink>
					</li>
					<li>
						<NavLink to="libary">
							<Hovbutton01
								icon={library}
								info="Library"
								width="30px"
							/>
						</NavLink>
					</li>

					<li>
						<NavLink to="profile">
							<Hovbutton01
								icon={profile}
								info="Profiles"
								width="30px"
							/>
						</NavLink>
					</li>
				</ul>
			</nav>
		</>
	);
}

// <div className="inline-flex justify-center items-center gap-10 mt-8">
// 	<PayWithButton
// 		icon={cardIcon}
// 		info="Card"
// 		width="30px"
// 	/>
// 	<PayWithButton
// 		icon={bankIcon}
// 		info="Bank"
// 		width="25px"
// 	/>
// 	<PayWithButton
// 		icon={cryptoIcon}
// 		info="Crypto"
// 		width="28px"
// 	/>
// </div>;
