import { useState } from "react";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";

import Roots from "./Roots";
import Home from "./Pages/Home";
import Library from "./Pages/Library";
import Menu from "./Pages/Menu";
import Profile from "./Pages/Profile";
import "./App.css";
import CgpaPlaner from "./components/CgpaPlaner";
import CgpaCalculator from "./components/CgpaCalculator";
import Edu from "./Pages/Edu";
import Auth from "./Pages/Auth";
const router = createBrowserRouter(
	createRoutesFromElements(
		<Route
			path="/"
			element={<Roots />}
		>
			<Route
				index
				element={<Home />}
			></Route>
			<Route
				path="/auth"
				element={<Auth />}
			></Route>
			<Route
				path="/libary"
				element={<Library />}
			></Route>
			<Route
				path="/menu"
				element={<Menu />}
			></Route>
			<Route
				path="/profile"
				element={<Profile />}
			></Route>
			<Route
				path="edu"
				element={<Edu />}
			>
				<Route
					path="cgpa-planner"
					element={<CgpaPlaner />}
				/>
				<Route
					path="calculator"
					element={<CgpaCalculator />}
				/>
			</Route>
		</Route>
	)
);
function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
