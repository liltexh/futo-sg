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
			<div className="flex flex-col justify-evenly bg-gray-50 w-[80%]  rounded-xl p-4 z-0 border-2 border-gray-500 gap-6">
				<div className="flex flex-col justify-center gap-4">
					<h3 className="text-3xl font-semibold">{result.level}</h3>
					<div className="bg-gray-500 px-4 py-1 rounded-md flex justify-between text-gray-50">
						<button className="bg-gray-300 px-8 py-1 rounded-md shadow-xl">
							First Semester
						</button>
						<button>Second Semester</button>
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
				<div className="flex flex-col w-full">
					<div className="flex border justify-evenly gap-4 rounded-sm p-2">
						<input
							type="text"
							name="course"
							value={gpaRes.course}
							placeholder="Course"
							className="shrink min-w-10 flex-1 inset-shadow-md"
							onChange={editRes}
						/>
						<input
							type="text"
							placeholder="Unit"
							name="unit"
							value={gpaRes.unit}
							className="shrink min-w-10 flex-1"
							onChange={editRes}
						/>
						<input
							type="text"
							placeholder="Grade"
							name="grade"
							value={gpaRes.grade}
							className="shrink min-w-10 flex-1"
							onChange={editRes}
						/>
					</div>
					<div>
						<Button01
							texts="Add"
							doclick={addResult}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
