import { useState, useEffect } from "react";
import Logo from "./Logo";
import SideBarDropdown from "./SideBarDropdown";

const dropdownEmployees = [
	{ name: "By Employees", path: "/manager/employees" },
	{ name: "Jon's Profile", path: "/manager/profile", employeeId: "Jon" },
];

const ManagerSideBar = () => {
	const [dropdownTeams, setDropdownTeams] = useState([
		{ name: "By Teams", path: "/manager/teams" },
	]); // Default dropdown with "By Teams" option

	useEffect(() => {
		// Function to get team data from localStorage
		const getTeamData = () => {
			const storedData = localStorage.getItem("teamData");
			return storedData ? JSON.parse(storedData) : null;
		};

		const teamData = getTeamData();

		// Transform the team data into dropdown format
		if (teamData) {
			const transformedTeams = transformData(teamData);
			setDropdownTeams(transformedTeams);
		}
	}, []);

	return (
		<div className="min-h-screen flex flex-col gap-5 w-[330px] px-8 shadow-md border-r-4 border-custom-gray p-4">
			<Logo />
			<SideBarDropdown
				options={dropdownTeams}
				defaultSelected={"/manager/teams"}
			/>
			<SideBarDropdown
				options={dropdownEmployees}
				defaultSelected={"/manager/employees"}
			/>

			<NormalSideText namesTexts={["Batch Edit", "Help"]} />
		</div>
	);
};

const transformData = (teamData) => {
	const dropdownTeams = [{ name: "By Teams", path: "/manager/teams" }]; // Default item

	// Iterate through the group data
	teamData.forEach((group) => {
		const groupName = Object.keys(group)[0]; // Get the team name (e.g., "Group 1", "Group 2")

		// Add the group as an item to the dropdownTeams array
		dropdownTeams.push({
			name: `Team ${groupName}`,
			path: "/manager/members",
			teamId: groupName,
		});
	});

	return dropdownTeams;
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
