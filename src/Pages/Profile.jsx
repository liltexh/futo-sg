import React from "react";
import CrossShadow from "../components/CrossShadow";

export default function Profile() {
	return (
		<div className="flex flex-col lg:justify-between lg:flex-row h-dvh p-8">
			<div className="flex-1/2 flex flex-col gap-20">
				<section className="flex flex-col gap-4">
					<h3 className="text-4xl lg:text-6xl font-semibold">Profile</h3>
					<p className="text-xl ">
						lorem ipsum canan hdbjbn jcbsjbhab uhdiah uhdbgu
					</p>
				</section>
				<section className="flex flex-col gap-3">
					{profiles.map((profile, idx) => {
						return (
							<div
								key={idx}
								className="h-14 border-2 border-gray-600 rounded-md flex items-center p-2 relative bg-white lg:w-[90%] shadow-xl"
							>
								<CrossShadow>{profile.name}</CrossShadow>
							</div>
						);
					})}
				</section>
			</div>
			<section className="flex-1/2  flex-col gap-8 items-center  hidden lg:flex">
				<div className="w-32 h-32 bg-gray-500 rounded-full text-center">
					img
				</div>
				<div className="w-[80%] h-[60%] rounded-xl bg-gray-500"></div>
			</section>
		</div>
	);
}

const profiles = [
	{ name: "Check Result" },
	{ name: "Edit Profile" },
	{ name: "Settings" },
	{ name: "About Us" },
	{ name: "LogOut" },
	{ name: "Delete Account" },
];
