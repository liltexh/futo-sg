import { useRef, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import "../index.css";
import {
	verifyEmailInput,
	RemoveInputError,
	addInputError,
	verifyFullnameInput,
	verifyPhoneNumber,
	verifyPassword,
} from "../tools/userValidation.js";
import PasswordInput from "./PasswordInput.jsx";
// import { createUserInFireStore } from "../Tools/firestoreFunctions.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { userAuth } from "../config/Firebase.js";
import useLoadinganimation from "../hooks/useLoadingAnimation/useLoadingAnimation.jsx";
import Button02 from "./Button02.jsx";

export default function SignUp({ state }) {
	const { setHasAccount } = state;
	const { startLoading, stopLoading } = useLoadinganimation();

	const [phoneNumberInput, setPhoneNumberInput] = useState("");
	const [invalidForm, handleInvalidForm] = useState(false);
	const fullNameRef = useRef(null);
	const phoneNumberRef = useRef(null);
	const emailRef = useRef("yes");
	const passwordRef = useRef(null);

	async function createUser(event) {
		event.preventDefault();
		const fullName = fullNameRef.current;
		const phoneNumber = phoneNumberRef.current;
		const email = emailRef.current;
		const password = passwordRef.current;

		const UserInputs = checkUserInputs();
		if (!UserInputs) {
			console.log("invalid form");
			return;
		}

		try {
			startLoading();
			const userCredentials = await createUserWithEmailAndPassword(
				userAuth,
				email.value.toLocaleLowerCase(),
				password.value
			);
			// if (userCredentials) {
			// 	await createUserInFireStore(
			// 		userCredentials.user.uid,
			// 		fullName.value.toString(),
			// 		email.value.toString(),
			// 		phoneNumber.value.toString(),
			// 		password.value.toString()
			// 	);
			// 	stopLoading();
			// 	alert("user has been created sussefully");
			// }
		} catch (error) {
			stopLoading();
			alert(error.message);
		}
	}

	function checkUserInputs() {
		let checker = true;
		const email = emailRef.current.value;
		const phoneNumber = phoneNumberRef.current.value.toString();
		if (!verifyFullnameInput(fullNameRef.current.value)) {
			addInputError(fullNameRef.current);
		} else {
			RemoveInputError(fullNameRef.current);
		}
		if (!verifyEmailInput(email)) {
			addInputError(emailRef.current);
		} else {
			RemoveInputError(emailRef.current);
		}

		if (!verifyPhoneNumber(phoneNumber)) {
			addInputError(phoneNumberRef.current.parentElement);
		} else {
			RemoveInputError(phoneNumberRef.current);
		}

		if (!verifyPassword(passwordRef.current.value)) {
			addInputError(passwordRef.current.parentElement);
		} else {
			RemoveInputError(passwordRef.current.parentElement);
		}

		if (
			!verifyFullnameInput(fullNameRef.current.value) ||
			!verifyEmailInput(email) ||
			!verifyPhoneNumber(phoneNumber) ||
			!verifyPassword(passwordRef.current.value)
		) {
			handleInvalidForm(true);
			checker = false;
		} else {
			handleInvalidForm(false);
		}
		return checker;
	}

	// useEffect(() => {
	// 	console.log(userAuth);
	// }, []);

	return (
		<div className="w-full h-screen flex justify-center items-center mt-40 mb-32">
			{invalidForm && (
				<span
					style={{ backgroundColor: "rgba(0,0,0,0.1)" }}
					className="z-50 fixed top-[30%]  bg-transparent w-auto h-auto  border border-red-700 p-2 rounded backdrop-blur-sm"
				>
					<TypeAnimation
						sequence={[
							"Invalid Input or .",
							100,
							"Invalid Input or ..",
							100,
							"Invalid Input or ...",
							1000,
							"Invalid Input or ..",
							100,
							"Invalid Input or .",
							300,
							"Invalid Input or ",
							1000,
							"Invalid Input or Incomplete Credentials... ",
						]}
						speed={90}
						className="text-red-700 font-semibold text-xl"
					/>
				</span>
			)}
			<section
				className="w-11/12 md:w-2/3 lg:w-2/3 flex flex-col
			justify-center rounded  text-green-400 shadow-md"
			>
				<div className="back_background ">
					<div className="front_blur_background flex flex-col items-center justify-center gap-4 p-10 pl-5 pr-5">
						<h2 className="text-4xl font-bold">Welcome</h2>
					</div>
				</div>
				<div
					className="flex flex-col justify-center p-8 pr-5 pl-5
				gap-4 "
				>
					<h3 className="text-xl font-semibold mb-2">Create An Account</h3>

					<form
						onSubmit={createUser}
						className="flex flex-col gap-5 justify-center"
					>
						<label className="flex flex-col gap-2 font-medium">
							Full Name
							<input
								type="text"
								placeholder="Enter full name"
								ref={fullNameRef}
								className="bg-transparent w-full h-9 p-5 rounded border border-green-400
						"
							/>
						</label>

						<label className="flex flex-col gap-2 font-medium">
							Email Address
							<input
								type="text"
								placeholder="Enter email address"
								ref={emailRef}
								className="bg-transparent w-full h-9 p-5 rounded border border-green-400
						"
							/>
						</label>

						<label className="flex flex-col gap-2 font-medium">
							PhoneNumber
							<PhoneInput
								international
								defaultCountry="US"
								value={phoneNumberInput}
								onChange={setPhoneNumberInput}
								placeholder="Enter phone number"
								ref={phoneNumberRef}
								className="flex justify-between items-center bg-transparent w-full h-9 rounded border border-green-400 pt-5 pb-5 pr-3  focus-within:border-white   focus-within:ring focus:ring-white"
							/>
						</label>

						<label className="flex flex-col gap-3 font-medium">
							Password
							<PasswordInput state={{ passwordRef }} />
						</label>
						<label className="flex gap-2 font-medium">
							<input type="checkbox" />
							Remember Me
						</label>

						<div>
							<Button02 texts="Sign Up" />
						</div>
					</form>
					<h6>
						Have an account ?{" "}
						<button
							className="underline"
							onClick={() => {
								setHasAccount(true);
							}}
						>
							Login
						</button>
					</h6>
				</div>
			</section>
		</div>
	);
}
