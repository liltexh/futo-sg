import React, { useEffect, useState } from "react";
import Button01 from "./Button01";
import useAddToStorage from "../hooks/useAddToStorage/useAddToStorage";
import { generateId } from "../tools/generateNum";
import { calculateGPA } from "../tools/cgpa";
import { toUpper } from "../tools/formatString";

export default function CgpaLevelView({ result, viewingResult }) {
	const [gpaResults, setGpaResult] = useAddToStorage("gpas", []);
	const [gpaTotal, setGpaTotal] = useState();
	const [gpaRes, setGpaRes] = useState({
		id: "",
		course: "",
		unit: "",
		grade: "",
	});
	const addResult = () => {
		const tempres = {
			id: generateId(),
			...gpaRes,
		};
		setGpaResult((p) => [...p, tempres]);
		setGpaRes({
			id: "",
			course: "",
			unit: "",
			grade: "",
		});
	};
	const editRes = (e) => {
		const { name, value } = e.target;
		setGpaRes((p) => ({ ...p, [name]: value }));
	};

	useEffect(() => {
		const getResultTotal = () => {
			const total = calculateGPA(gpaResults);
			setGpaTotal(total);
		};
		return getResultTotal();
	}, [gpaResults]);
	return (
		<section className="fixed inset-0 backdrop-blur-2xl flex justify-center items-center h-dvh z-50">
			<div className="flex flex-col justify-evenly bg-gray-50 w-[80%]  rounded-xl p-4 z-0 border-2 border-gray-500 gap-4">
				<div className="flex flex-col justify-center gap-4">
					<h3 className="text-3xl font-semibold">{result.level}</h3>
					<div className="bg-gray-500 px-1 md:px-4 py-1 rounded-md flex justify-between text-gray-50 gap-2">
						<button className="bg-gray-300 py-1 rounded-md shadow-xl whitespace-nowrap flex-1">
							First Semester
						</button>
						<button className="py-1 rounded-md whitespace-nowrap flex-1">
							Second Semester
						</button>
					</div>
				</div>
				<div className="flex flex-col justify-center items-center gap-2">
					<h4 className="text-5xl font-bold">{gpaTotal}</h4>
					<p className="font-semibold text-gray-600">
						Total GPA For First Semester
					</p>
				</div>
				<div className="flex flex-col gap-4">
					<div>
						<h4 className="text-2xl font-semibold text-gray-600">Results</h4>
					</div>
					<div className="flex flex-col shadow-xl rounded-md overflow-y-scroll h-[24vh]">
						{gpaResults.map((res, idx) => {
							return (
								<div
									key={idx}
									className={`flex gap-4 items-center p-1 w-full px-6 justify-between ${
										idx % 2 == 0 ? "bg-gray-500 text-white" : "bg-white"
									}`}
								>
									<span>{res.course}</span>
									<span>{res.unit}</span>
									<span>{toUpper(res.grade)}</span>
									<button className="">del</button>
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
						<button
							className="bg-gray-500 w-full text-gray-50 py-2 rounded-md shadow-md"
							onClick={addResult}
						>
							Add
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
