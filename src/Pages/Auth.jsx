import { useState } from "react";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
function Auth() {
	const [hasAccount, setHasAccount] = useState(true);
	if (hasAccount) {
		return <SignIn state={{ setHasAccount }} />;
	} else {
		return <SignUp state={{ setHasAccount }} />;
	}
}

export default Auth;
