import React, { useRef, useState } from "react";
import Button01 from "./Button01";
import CrossShadow from "./CrossShadow";
import useAddToStorage from "../hooks/useAddToStorage/useAddToStorage";
import { empty } from "../tools/image";
import CgpaLevelView from "./CgpaLevelView";
import { generateId } from "../tools/generateNum";
import Button02 from "./Button02";

export default function CgpaCalculator() {
	const [Clevel, setCLevel] = useState(false);
	const [userLevel, addUserLevel] = useAddToStorage("level", []);
	const [viewingResult, setViewingResult] = useState(false);
	const [currentResultId, setCurrentResultId] = useState(null);
	const ChooseLevel = () => {
		setCLevel(true);
	};
	const viewGpaResult = (Id) => {
		setCurrentResultId(Id);
		setViewingResult(true);
	};
	return (
		<>
			{Clevel && (
				<ChooseLevelContainer
					setCLevel={setCLevel}
					addUserLevel={addUserLevel}
				/>
			)}
			{viewingResult && (
				<CgpaLevelView
					resultId={currentResultId}
					setViewingResult={setViewingResult}
				/>
			)}
			<div className="flex flex-col my-10 gap-10">
				<section className="flex flex-col justify-center items-center gap-3">
					<h2 className="text-4xl font-semibold mb-10 text-green-400">
						CGPA CALCULATOR
					</h2>
					<div className="text-6xl font-semibold text-white p-2 rounded-md bg-green-400 shadow-md">
						0.00
					</div>
					<div className="text-xl text-green-400">Total CGPA</div>
				</section>
				<section className="flex justify-center">
					<div className="relative w-[90%] lg:w-[50%] aspect-video shadow-xl rounded-md bg-white">
						{userLevel.length == 0 && (
							<img
								src={empty}
								alt=""
								className="absolute left-1/2 -translate-x-1/2 bottom-1 w-[40%]"
							/>
						)}

						<div className="relative w-full h-full flex flex-col z-10 gap-2 overflow-y-auto">
							{userLevel.map((stuLevel, idx) => {
								return (
									<div key={idx}>
										<div className="h-14 flex items-center justify-end p-2 relative bg-white lg:w-[90%] border-b border-green-400 gap-4 text-green-400">
											<span className="mr-auto">{stuLevel.level}</span>
											<button
												onClick={() => {
													viewGpaResult(stuLevel.id);
												}}
											>
												view
											</button>
											<button>delete</button>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</section>
				<section className="flex justify-center items-center px-6">
					<Button02
						texts="Add Level"
						doclick={() => {
							ChooseLevel();
						}}
					/>
				</section>
			</div>
		</>
	);
}

function ChooseLevelContainer({ setCLevel, addUserLevel }) {
	const levelRef = useRef(null);
	const addLevel = () => {
		if (!levelRef.current.value) {
			return;
		}

		const userInfo = {
			id: generateId(),
			level: levelRef.current.value,
			gpas: [],
		};
		addUserLevel((p) => [...p, userInfo]);
		setCLevel(false);
	};

	return (
		<section className="fixed inset-0 backdrop-blur-2xl flex justify-center items-center h-dvh z-50">
			<div className="flex flex-col justify-evenly items-center bg-gray-50 w-[80%] lg:w-[30%] aspect-video rounded-xl p-4 z-0 border-2 border-gray-500">
				<label className=" relative border-2 border-gray-500 w-full py-2 rounded-md p-2 bg-white shadow-xl">
					<CrossShadow>
						<input
							type="text"
							placeholder="Enter Level"
							className="outline-0"
							ref={levelRef}
						/>
					</CrossShadow>
				</label>
				<Button01
					texts="Add"
					doclick={() => {
						addLevel();
					}}
				/>
			</div>
		</section>
	);
}
