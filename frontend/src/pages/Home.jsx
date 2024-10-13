import { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginSidePhoto from "../assets/psa/loginSidePhoto.png";
import logo from "../assets//psa/logo.png";

const PEOPLEINFO = {
	manager: {
		username: "managerUser@manager.psa.sg",
		password: "manager",
	},
	staff: {
		username: "staffUser@staff.psa.sg",
		password: "staff",
	},
};

const Home = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleUsername = ({ target }) => {
		setUsername(() => target.value);
	};

	const handlePassword = ({ target }) => {
		setPassword(() => target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const managerRegex = /@manager.psa.sg/;
		const staffRegex = /@staff.psa.sg/;

		if (
			managerRegex.test(username) &&
			password === PEOPLEINFO.manager.password
		) {
			console.log("manager logged in ");
			const personName = username.split('@')[0];
			loginSite("manager", personName);
		} else if (
			staffRegex.test(username) &&
			password === PEOPLEINFO.staff.password
		) {
			console.log("staff logged in");
			const personName = username.split('@')[0];
			loginSite("staff", personName);
		} else {
			console.log("Invalid");
			// show wrong password component
		}
	};

	const navigate = useNavigate();

	// Routing to manager/staff sites
	const loginSite = (role, personName) => {
		if (role === "manager") {
			navigate("/manager/teams", { state: { personName } }); // Pass username via state
		} else if (role === "staff") {
			navigate("/staff/profile", { state: { personName } }); // Pass username via state
		}
	};

	return (
		<div className="h-screen overflow-hidden flex flex-col md:flex-row w-full">
			{/* Left side with image, hidden on small screens */}
			<div className="hidden md:block flex-[7] h-full overflow-hidden">
				<img
					src={loginSidePhoto}
					alt="Side photo"
					className="object-cover h-full w-full"
				/>
			</div>

			{/* Right side with login form */}
			<div className="flex-[3] flex  justify-center h-full w-full p-8 bg-white">
				<LoginForm
					username={username}
					handleUsername={handleUsername}
					password={password}
					handlePassword={handlePassword}
					handleSubmit={handleSubmit}
				/>
			</div>
		</div>
	);
};

const LoginForm = ({
	username,
	handleUsername,
	password,
	handlePassword,
	handleSubmit,
}) => {
	return (
		<>
			<div className="flex flex-col items-center space-y-6 w-full max-w-sm">
				<img src={logo} alt="logo" className="w-1/2" />
				<h3 className="font-bold text-xl">Welcome</h3>
				<form
					onSubmit={handleSubmit}
					className="w-full flex flex-col space-y-4"
				>
					<label>
						Login
						<input
							type="text"
							value={username}
							onChange={handleUsername}
							className="w-full border border-gray-300 rounded p-2"
							required
						/>
					</label>

					<br />

					<label>
						Password
						<input
							type="password"
							value={password}
							onChange={handlePassword}
							className="w-full border border-gray-300 rounded p-2"
							required
						/>
					</label>

					<br />
					{/* toggle button to remember me */}

					<button
						type="submit"
						className="bg-blue-500 text-white p-2 rounded w-full"
					>
						Sign In
					</button>
				</form>
			</div>
		</>
	);
};

export default Home;
