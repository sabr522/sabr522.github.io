import BentoCard from "../../components/BentoCard";
import ManagerSideBar from "../../components/ManagerSideBar";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import teamService from "../../services/teamServices";

const TEAM = [
	{
		"Group 1": [
			{
				Name: "Glenn Tan",
				Department: "IT Division",
				"Years of Experience": 1,
				Email: "Glenn_Tan@staff.psa.sg",
				path: "/manager/members",
				teamId: "Group 1",
			},
			{
				Name: "Ethan Tan",
				Department: "IT Division",
				"Years of Experience": 7,
				Email: "Ethan_Tan@staff.psa.sg",
				path: "/manager/members",
				teamId: "Group 1",
			},
			{
				Name: "David Chen",
				Department: "IT Division",
				"Years of Experience": 5,
				Email: "David_Chen@staff.psa.sg",
				path: "/manager/members",
				teamId: "Group 1",
			},
			{
				Name: "Priya Patel",
				Department: "Engineering",
				"Years of Experience": 3,
				Email: "Priya_patel@staff.psa.sg",
				path: "/manager/members",
				teamId: "Group 1",
			},
			{
				Name: "Jonathan Chen",
				Department: "Marketing",
				"Years of Experience": 6,
				Email: "Jonathan_Chen@staff.psa.sg",
				path: "/manager/members",
				teamId: "Group 1",
			},
		],
		Rationale:
			"Balanced years of experience, with a mix of IT Division, Engineering, and Marketing departments.",
	},
	{
		"Group 2": [
			{
				Name: "Goh Si Ling",
				Department: "Human Resources",
				"Years of Experience": 10,
				Email: "Goh_Si_Ling@staff.psa.sg",
				path: "/manager/members",
				teamId: "Group 2",
			},
			{
				Name: "Daniel Tan",
				Department: "Engineering",
				"Years of Experience": 12,
				Email: "Daniel_Tan@staff.psa.sg",
				path: "/manager/members",
				teamId: "Group 2",
			},
			{
				Name: "Aishah Rahman",
				Department: "Supply Chain",
				"Years of Experience": 5,
				Email: "Aishah_Rahman@staff.psa.sg",
				path: "/manager/members",
				teamId: "Group 2",
			},
			{
				Name: "Sarah Lee",
				Department: "Port Operations",
				"Years of Experience": 1,
				Email: "Sarah_Lee@staff.psa.sg",
				path: "/manager/members",
				teamId: "Group 2",
			},
			{
				Name: "Emily Wong",
				Department: "Procurement",
				"Years of Experience": 0,
				Email: "Emily_wong@staff.psa.sg",
				path: "/manager/members",
				teamId: "Group 2",
			},
		],
		Rationale:
			"Balanced years of experience, with a mix of Human Resources, Engineering, Supply Chain, Port Operations, and Procurement departments.",
	},
	{
		"Group 3": [
			{
				Name: "Benjamin Lee",
				Department: "Engineering",
				"Years of Experience": 2,
				Email: "Benjamin_Lee@staff.psa.sg",
				path: "/manager/members",
				teamId: "Group 3",
			},
			{
				Name: "Darren Wong",
				Department: "Engineering",
				"Years of Experience": 2,
				Email: "Darren_Wong@staff.psa.sg",
				path: "/manager/members",
				teamId: "Group 3",
			},
			{
				Name: "James Lim",
				Department: "Engineering",
				"Years of Experience": 1,
				Email: "James_Lim@staff.psa.sg",
				path: "/manager/members",
				teamId: "Group 3",
			},
			{
				Name: "Louie Ang",
				Department: "Finance",
				"Years of Experience": 10,
				Email: "Louie_Ang@staff.psa.sg",
				path: "/manager/members",
				teamId: "Group 3",
			},
			{
				Name: "Olivia Chen",
				Department: "Finance",
				"Years of Experience": 3,
				Email: "Olivia_Chen@staff.psa.sg",
				path: "/manager/members",
				teamId: "Group 3",
			},
		],
		Rationale:
			"Balanced years of experience, with a focus on Engineering and Finance departments.",
	},
	{
		"Group 4": [
			{
				Name: "Tom Zhen",
				Department: "Engineering",
				"Years of Experience": 0,
				Email: "Tom_Zhen@staff.psa.sg",
				path: "/manager/members",
				teamId: "Group 4",
			},
			{
				Name: "Pan Xi Yi",
				Department: "Finance",
				"Years of Experience": 0,
				Email: "Pan_Xi_Yi@staff.psa.sg",
				path: "/manager/members",
				teamId: "Group 4",
			},
			{
				Name: "Yusoff Rohan",
				Department: "Data Analytics",
				"Years of Experience": 2,
				Email: "Yusoff_Rohan@staff.psa.sg",
				path: "/manager/members",
				teamId: "Group 4",
			},
			{
				Name: "Ethan John",
				Department: "Finance",
				"Years of Experience": 1,
				Email: "Ethan_John@staff.psa.sg",
				path: "/manager/members",
				teamId: "Group 4",
			},
			{
				Name: "Esther Lee",
				Department: "Supply Chain",
				"Years of Experience": 1,
				Email: "Esther_Lee@staff.psa.sg",
				path: "/manager/members",
				teamId: "Group 4",
			},
		],
		Rationale:
			"Balanced years of experience, with a mix of Engineering, Finance, Data Analytics, and Supply Chain departments.",
	},
];
const Members = () => {
	const location = useLocation();

	const { selectedTeamId } = location.state || {};
	const [selectedTeam, setSelectedTeam] = useState(null);

	const HEADER = {
		mainHeader: `Employee in ${selectedTeamId}`,
		subHeaders: [
			"Staff Name",
			"Department",
			"Years Of Experience",
			"Email",
		],
	};

	useEffect(() => {
		const fetchAndSetTeams = async () => {
			try {
				const getTeamData = () => {
					const storedData = localStorage.getItem("teamData");
					return storedData ? JSON.parse(storedData) : null;
				};
				const teamData = getTeamData();

				console.log("data in members: ", teamData);
				const foundGroup = teamData.find((group) => {
					// Extract the group key
					const groupKey = Object.keys(group).find(
						(key) => key === selectedTeamId
					);
					// Return true if the group key matches the selectedTeamId
					return groupKey !== undefined;
				});

				if (foundGroup) {
					setSelectedTeam(foundGroup[selectedTeamId]);
				}
			} catch (error) {
				console.error("Error fetching teams:", error);
			}
		};

		fetchAndSetTeams();
	}, [selectedTeamId]);

	return (
		<div className="flex ">
			<ManagerSideBar />
			<div className="w-full flex flex-col ml-[37px] mt-7 mr-[40px]">
				<div className="w-full">
					<div className="w-full relative max-w-5xl p-6 bg-white shadow-lg rounded-[30px] border border-gray-200 mb-2">
						<BentoCard headers={HEADER} />
						{selectedTeam &&
							selectedTeam.map((teamMember, index) => (
								<div
									key={index}
									className="h-[55px] flex items-center justify-around border-b border-gray-200 pb-4"
								>
									{/* Name */}
									<div className="font-semibold text-gray-800">
										{teamMember.Name}
									</div>

									{/* Department */}
									<div className="font-semibold text-gray-800">
										{teamMember.Department}
									</div>

									{/* Years of Experience */}
									<div className="font-semibold text-gray-800">
										{teamMember["Years of Experience"]}
									</div>

									{/* Email */}
									<div className="font-semibold text-gray-800">
										{teamMember.Email}
									</div>
								</div>
							))}
					</div>
				</div>
				<AIReasoningCard />
			</div>
		</div>
	);
};

const AIReasoningCard = () => {
	// Placeholder state for the content fetched from the backend
	const [aiReasoning, setAiReasoning] = useState("Loading AI reasoning...");

	// Simulate fetching data from a backend
	useEffect(() => {
		const fetchAiReasoning = async () => {
			try {
				// Simulate an async API call to fetch data (replace with your real API call)
				const response = await new Promise((resolve) =>
					setTimeout(
						() =>
							resolve(
								"AI reasoning for the group: This data was generated by AI."
							),
						2000
					)
				);
				setAiReasoning(response); // Set the fetched AI reasoning
			} catch (error) {
				console.error("Error fetching AI reasoning:", error);
				setAiReasoning("Failed to load AI reasoning");
			}
		};

		fetchAiReasoning();
	}, []);

	return (
		<div className="mt-5 w-full">
			<div className="flex flex-col bg-white border border-gray-200 mb-2 rounded-[30px] shadow-lg overflow-hidden">
				<div className=" p-4 text-center font-bold text-lg">
					AI reasoning for the group
				</div>
				<div className="p-6 bg-gray-100 min-h-[150px] flex items-center justify-center">
					<p className="text-gray-700 text-sm text-center">
						{aiReasoning}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Members;
