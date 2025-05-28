import { useState, useEffect } from "react";
import Hovbutton01 from "../components/Hovbutton01";
import { crossH } from "../tools/image";
import CrossShadow from "../components/CrossShadow";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { userAuth } from "../config/Firebase";
import {
	book,
	calculator,
	chatbubbles,
	checkbox,
	newspaper,
} from "../tools/icons";

export default function Home() {
	const [isLoading, setIsLoading] = useState(false);
	const [currentUser, setCurrentUser] = useState(null);
	const navigate = useNavigate();
	useEffect(() => {
		setIsLoading(true);
		const unsubscribe = onAuthStateChanged(userAuth, (user) => {
			if (user?.emailVerified) {
				setCurrentUser(user);
			} else {
				console.log("not verified");
				navigate("/auth");
			}
		});
		return unsubscribe;
	}, []);
	return (
		<div className="flex flex-col lg:flex-row justify-evenly h-dvh">
			<section className="lg:flex-1/2 flex flex-col gap-10 justify-center items-center lg:mr-10">
				<div className="relative shadow-xl w-fit rounded-md justify-self-start self-start">
					<CrossShadow>
						<div className="flex bg-white w-full h-10 rounded-md">
							<button>icon</button>
							<input
								type="text"
								placeholder="Search"
							/>
						</div>
					</CrossShadow>
				</div>

				<div className="w-full min-h-44 bg-white shadow-md aspect-video rounded-md"></div>
			</section>
			<section className="flex justify-center items-center lg:flex-1/2">
				<div className="grid grid-cols-2 md:grid-cols-1 gap-4 lg:grid-cols-3 w-full  p-2">
					{Features.map((feature, idx) => {
						return (
							<div
								key={idx}
								className={`flex justify-center items-center rounded-md h-20 lg:h-24 shadow-xl relative text-white text-sm md:text-xl lg:text-2xl font-semibold border-2 border-gray-400 min-w-36 bg-white whitespace-nowrap ${
									idx == 4 && "col-span-2"
								}`}
							>
								<div className="flex justify-evenly items-center  bg-green-400 w-[90%] h-[80%] rounded-md shadow-xl relative md:p-4">
									<img
										src={feature.icon}
										alt=""
										className="w-8 md:w-10 bg-white p-2 rounded-md shadow"
									/>
									<NavLink to={feature.link}>{feature.name}</NavLink>
								</div>
							</div>
						);
					})}
				</div>
			</section>
		</div>
	);
}

const Features = [
	{ name: "Lecture Note", link: "#", icon: book },
	{ name: "Chat Room", link: "#", icon: chatbubbles },
	{ name: "CGPA Planner", link: "edu/cgpa-planner", icon: calculator },
	{ name: "E-Voting", link: "#", icon: checkbox },
	{ name: "Information And Annoucement", link: "#", icon: newspaper },
];
