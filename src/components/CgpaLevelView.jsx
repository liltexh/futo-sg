import { useEffect, useState } from "react";
import useAddToStorage from "../hooks/useAddToStorage/useAddToStorage";
import { generateId } from "../tools/generateNum";
import { calculateGPA } from "../tools/cgpa";
import { toUpper } from "../tools/formatString";
import Button02 from "./Button02";

export default function CgpaLevelView({ resultId, setViewingResult }) {
	const [specificLevel, setSpecificLevel] = useState(null);
	const [userLevel, addUserLevel] = useAddToStorage("level", []);
	const [gpaRes, setGpaRes] = useState({
		id: "",
		course: "",
		unit: "",
		grade: "",
		semester: "",
	});
	const [totalGpa, setTotalGpa] = useState("0.00");
	const [semester, setSemester] = useState("first");

	const addResult = () => {
		const { gpas } = specificLevel;

		const tempres = {
			...gpaRes,
			id: generateId(),
			semester: semester,
		};

		const newGpas = [...gpas, tempres];
		specificLevel.gpas = newGpas;

		editFromStorage("level", specificLevel, []);
		// addUserLevel((p) => [...p, specificLevel]);
		setGpaRes({
			id: "",
			course: "",
			unit: "",
			grade: "",
			semester: "",
		});
	};

	const editRes = (e) => {
		const { name, value } = e.target;
		setGpaRes((p) => ({ ...p, [name]: value }));
	};
	const changeSemester = (s) => {
		setSemester(s);
	};
	const editFromStorage = (key, newData, fallback) => {
		let AllLevels = localStorage.getItem(key)
			? JSON.parse(localStorage.getItem(key))
			: fallback;
		const index = AllLevels.findIndex((obj) => obj.id === newData.id);
		if (index !== -1) {
			AllLevels[index] = newData;
		}
		console.log(AllLevels);
		localStorage.setItem(key, JSON.stringify(AllLevels));
	};

	useEffect(() => {
		const SGpaResult = () => {
			for (const level of userLevel) {
				if (resultId == level.id) {
					setSpecificLevel(level);
					const GpaTotal = calculateGPA(level.gpas);
					setTotalGpa(GpaTotal);
					console.log(specificLevel);
				}
			}

			// setTotalGpa(totalGpa);
			setViewingResult(true);
		};

		return SGpaResult();
	}, [gpaRes]);

	return (
		<section className="fixed inset-0 backdrop-blur-2xl flex justify-center items-center h-dvh z-50">
			<div className="flex flex-col justify-evenly bg-gray-50 w-[80%] lg:w-[30%] rounded-xl p-4 z-0 border-2 border-gray-500 gap-4">
				<div className="flex flex-col justify-center gap-4">
					<div className="flex justify-between items-center">
						<h3 className="text-3xl font-semibold">
							{specificLevel?.level} level
						</h3>
						<button
							className="border-2 rounded-full w-4 h-4 flex justify-center text-center bg-red-500 mr-1"
							onClick={() => {
								setViewingResult(false);
							}}
						>
							{" "}
						</button>
					</div>
					<div className="bg-gray-500 px-1 py-1 rounded-md flex justify-between text-gray-50 gap-2">
						<button
							className={` py-1 rounded-md shadow-xl whitespace-nowrap flex-1 ${
								semester == "first" && "bg-gray-300"
							}`}
							onClick={() => {
								changeSemester("first");
							}}
						>
							First Semester
						</button>
						<button
							className={` py-1 rounded-md shadow-xl whitespace-nowrap flex-1 ${
								semester == "second" && "bg-gray-300"
							}`}
							onClick={() => {
								changeSemester("second");
							}}
						>
							Second Semester
						</button>
					</div>
				</div>
				<div className="flex flex-col justify-center items-center gap-2">
					<h4 className="text-5xl font-bold">{totalGpa}</h4>
					<p className="font-semibold text-gray-600">
						Total GPA For First Semester
					</p>
				</div>
				<div className="flex flex-col gap-4">
					<div>
						<h4 className="text-2xl font-semibold text-gray-600">Results</h4>
					</div>
					<div className="flex flex-col shadow-xl rounded-md overflow-y-scroll h-[24vh]">
						{specificLevel?.gpas.map((res, idx) => {
							return (
								<div
									key={idx}
									className={`grid grid-cols-10 items-center p-1 w-full px-6 justify-between ${
										idx % 2 == 0 ? "bg-gray-500 text-white" : "bg-white"
									}`}
								>
									<span className="col-span-5">{res.course}</span>
									<span className="col-span-2">{res.unit}</span>
									<span className="col-span-2">{toUpper(res.grade)}</span>
									<button className="border-2 rounded-full flex justify-center items-center w-5 h-5 font-bold">
										x
									</button>
								</div>
							);
						})}
					</div>
				</div>
				<div className="flex flex-col w-full gap-4">
					<div className="flex justify-evenly gap-4 rounded-sm">
						<input
							type="text"
							name="course"
							value={gpaRes.course}
							placeholder="Course"
							className="shrink min-w-10 flex-1 border-2 border-gray-500 rounded-md py-1 px-2 shadow-xl"
							onChange={editRes}
						/>
						<input
							type="text"
							placeholder="Unit"
							name="unit"
							value={gpaRes.unit}
							className="shrink min-w-10 flex-1 border-2 border-gray-500 rounded-md py-1 px-2 shadow-xl"
							onChange={editRes}
						/>
						<input
							type="text"
							placeholder="Grade"
							name="grade"
							value={gpaRes.grade}
							className="shrink min-w-10 flex-1 border-2 border-gray-500 rounded-md py-1 px-2 shadow-xl"
							onChange={editRes}
						/>
					</div>
					<div className="flex justify-center items-center">
						<Button02
							texts="Add"
							doclick={addResult}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
