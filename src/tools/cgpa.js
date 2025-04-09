// Helper: Grade to point mapping
const gradeToPoint = {
	A: 5,
	B: 4,
	C: 3,
	D: 2,
	E: 1,
	F: 0,
};

// Function to calculate GPA from a list of course objects
function calculateGPA(courses) {
	let totalPoints = 0;
	let totalUnits = 0;

	courses.forEach((course) => {
		const grade = course.grade.toUpperCase(); // Ensure grade is uppercase
		const unit = course.unit;
		console.log(unit);
		const point = gradeToPoint[grade];
		console.log(unit, point);
		if (point !== undefined) {
			totalPoints += Number(point * unit);
			totalUnits += Number(unit);
		}
		console.log(totalPoints, totalUnits);
	});

	return totalUnits === 0 ? 0 : (totalPoints / totalUnits).toFixed(2);
}

// Function to calculate CGPA from a list of GPA grades
function calculateCGPA(gpaList) {
	if (gpaList.length === 0) return 0;

	const totalGPA = gpaList.reduce((sum, gpa) => sum + parseFloat(gpa), 0);
	return (totalGPA / gpaList.length).toFixed(2);
}

export { calculateGPA, calculateCGPA };

// example

// const courses = [
// 	{ name: "Math", unit: 3, grade: "A" },
// 	{ name: "English", unit: 2, grade: "B" },
// 	{ name: "Chemistry", unit: 3, grade: "C" },
// ];

// const gpa = calculateGPA(courses);
// console.log("Current GPA:", gpa); // Example: "Current GPA: 3.67"

// const cgpa = calculateCGPA([3.5, 3.8, gpa]);
// console.log("Cumulative GPA:", cgpa); // Example: "Cumulative GPA: 3.66"
