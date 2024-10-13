import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Logo from "./Logo";

const dropdownEmployees = [
	{ name: "By Employees", path: "/manager/employees" },
	{ name: "Jon's Profile", path: "/manager/profile", employeeId: "Jon" },
];

const ManagerSideBar = () => {

	useEffect(() => {
		const getTeamData = () => {
			const storedData = localStorage.getItem("teamData");
			return storedData ? JSON.parse(storedData) : null;
		};
		const teamData = getTeam
	})
	const dropdownTeams = [
		{ name: "By Teams", path: "/manager/teams" },
		{ name: "Team A", path: "/manager/members", teamId: "Group 1" },
		{ name: "Team B", path: "/manager/members", teamId: "Group 2" },
	];


	return (
		<div className="min-h-screen flex flex-col gap-5 w-[330px] px-8 shadow-md border-r-4 border-custom-gray p-4">
			<Logo />
			<Dropdown
				options={dropdownTeams}
				defaultSelected={"/manager/teams"}
			/>
			<Dropdown
				options={dropdownEmployees}
				defaultSelected={"/manager/employees"}
			/>

			<NormalSideText namesTexts={["Batch Edit", "Help"]} />
		</div>
	);
};

const Dropdown = ({ options, defaultSelected }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selected, setSelected] = useState(
		defaultSelected || options[0].path
	);

	const navigate = useNavigate();
	const location = useLocation();

	// Toggle dropdown menu
	const toggleDropdown = (e) => {
		e.stopPropagation();
		setIsOpen(!isOpen);
	};

	// Detect if the URL matches any of the options
	useEffect(() => {
		const currentPath = location.pathname;
		const matchingOption = options.find(
			(option) => option.path === currentPath
		);
		if (matchingOption) {
			setSelected(matchingOption.path);
		}
	}, [location.pathname, options]);

	// Navigate and set the selected page
	const handleNavigate = (option) => {
		setSelected(option.name); // Update the selected state

		if (option.teamId) {
			// If there's a teamId, pass it as part of the state
			navigate(option.path, { state: { selectedTeamId: option.teamId } });
		} else if (option.employeeId) {
			navigate(option.path, {
				state: { selectedEmployeeId: option.employeeId },
			});
		} else {
			// Navigate normally for items like "By Teams" or "By Employees"
			navigate(option.path);
		}

		setIsOpen(false); // Close dropdown after navigation
	};

	return (
		<div className="relative inline-block text-left">
			{/* Main button with dynamic highlight based on the selected option */}
			<div className="flex items-center w-[370px]">
				<button
					className={`px-4 py-2 rounded-l-[20px] focus:outline-none ${
						selected === options[0].name // Check if 'By Teams' is selected
							? "bg-custom-purple-600 text-white"
							: "text-custom-grey-400"
					} `}
					onClick={() => {
						// Navigate to the path of the first option (e.g., "/manager/teams")
						handleNavigate(options[0]);
					}}
				>
					{options[0].name}
				</button>

				{/* Dropdown Toggle Button */}
				<button
					onClick={toggleDropdown}
					className={`${
						selected === options[0].name // Keep the toggle button style consistent
							? "bg-custom-purple-600 text-white"
							: "text-custom-grey-400"
					} px-2 py-2 rounded-r-[20px] focus:outline-none`}
				>
					{isOpen ? "▼" : "▸"}{" "}
					{/* Toggle the arrow based on isOpen */}
				</button>
			</div>

			{/* Dropdown menu, shown only when `isOpen` is true */}
			<div className={`${isOpen ? "block" : "hidden"} mt-2`}>
				<ul className="py-1">
					{options.slice(1).map((option) => (
						<li
							key={option.name}
							className={`px-4 py-2 hover:bg-gray-200 cursor-pointer text-custom-grey-400`}
							onClick={() => handleNavigate(option)} // Pass the option object
						>
							{option.name}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

const NormalSideText = ({ namesTexts }) => {
	return (
		<>
			{namesTexts.map((name) => (
				<p
					key={name}
					className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-custom-grey-400"
				>
					{name}
				</p>
			))}
		</>
	);
};

export default ManagerSideBar;
