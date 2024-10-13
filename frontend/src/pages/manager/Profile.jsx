import ManagerSideBar from "../../components/ManagerSideBar";
import profilePic from "../../assets/psa/profile_pic.png";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import teamServices from "../../services/teamServices";
import skillChart from "../../assets/psa/skillChart.jpg";

const MOCKAIDATA = {
	StrongPoints: [
		{
			Point: "Data Analysis",
			Description:
				"Esther has shown proficiency in data analysis, which can be valuable in identifying trends and making informed decisions.",
		},
		{
			Point: "Supply Chain Knowledge",
			Description:
				"With a strong foundation in supply chain knowledge, Esther can contribute to optimizing logistics and inventory management.",
		},
		{
			Point: "Inventory Management",
			Description:
				"Esther's skills in inventory management can help the team streamline operations and reduce costs.",
		},
	],
};

const Profile = () => {
	return (
		<div className="flex w-full mt-3 ">
			<ManagerSideBar />
			<div className="ml-5 mb-5 w-[40%]">
				<TopPortion />
				<BentoCard />
			</div>

			<div className="mx-3 w-[30%] min-h-screen">
				
				<SideCards height="30%">
					<h3 className="text-xl font-bold"> Employee Skills</h3>
					<img src={skillChart} alt="Skill Chart" className="w-[95%] h-[95%] object-contain rounded-[30px] py-2" />
				</SideCards>
				<SideCards height="40%">
					<h3 className="text-xl font-bold"> Career Progression</h3>
					<BoxesCards role="Developer" years="4 years" />
					<BoxesCards role="Senior Developer" years="3 years" />
					<BoxesCards role="Consultant" years="2 years" />
					<BoxesCards role="Senior Consultant" years="5 months" />
				</SideCards>
				<SideCards height="21%">
					<h3 className="text-xl font-bold"> Completed Courses</h3>
					<BoxesCards role="GeekOut 2024" />
					<BoxesCards role="Coding For Kids" />
				</SideCards>
			</div>
		</div>
	);
};

const BentoCard = () => {
	const [remarksData, setRemarksData] = useState("");

	const handleClick = async () => {
		const remarks = await teamServices.getRemarks();
		setRemarksData(() => remarks);
	};

	return (
		<div className="pb-5 flex flex-col border border-gray-200 rounded-[30px] shadow-lg bg-custom-grey-500">
			<div className="flex justify-between items-center p-4">
				<h3 className="text-2xl font-bold">AI Generated Remarks</h3>
				<DropdownBox />
			</div>

			<div className="flex flex-col gap-5 p-4">
				{remarksData &&
					remarksData.StrongPoints.map((data) => {
						return <SummaryCards key={data.Point} data={data} />;
					})}
			</div>
			<div className="w-[97%] flex justify-end">
				<GenerateButton handleClick={handleClick} />
			</div>
		</div>
	);
};

const BoxesCards = ({ role, years }) => {
	return (
		<div className="w-full flex justify-between p-3 bg-custom-grey-100 rounded-[20px] text-center shadow-md my-3">
			<p>{role}</p>
			<p>{years}</p>
		</div>
	);
};

const SummaryCards = ({ data }) => {
	return (
		<div className="p-6 bg-custom-grey-100 rounded-[20px] text-center shadow-md">
			<p className="text-lg font-semibold text-custom-purple-600">
				Point: {data.Point}
			</p>
			<p className="text-sm mt-2 text-custom-grey-400">
				Description: {data.Description}
			</p>
		</div>
	);
};

const DropdownBox = () => {
	return (
		<div className="relative">
			<select className="block appearance-none w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-purple-600">
				<option value="score">Sort by: Newest</option>
				<option value="teamName">Sort by: Skills</option>
				<option value="recent">Sort by: Recent</option>
			</select>
			{/* Arrow for the dropdown */}
			<div className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600">
				<svg
					className="w-4 h-4"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<path d="M19 9l-7 7-7-7"></path>
				</svg>
			</div>
		</div>
	);
};

const GenerateButton = ({ handleClick }) => {
	return (
		<button
			className="font-semibold px-5 py-3 rounded-[8px] bg-custom-purple-600 text-custom-grey-100 w-[30%] hover:bg-custom-purple-500"
			onClick={handleClick}
		>
			AI Summarise
		</button>
	);
};

const TopPortion = () => {
	const location = useLocation();
	const { teamMember } = location.state || {};
	const [profile, setProfile] = useState("");

	useEffect(() => {
		setProfile(() => teamMember);
	}, []);

	return (
		<div className="flex mb-8">
			<img src={profilePic} alt="Profile Picture" />
			<div className="flex flex-col h-[220px] gap-5 ml-10">
				<h1 className="font-bold text-2xl border-b-2 border-gray-300 mb-4 ">
					Name: {profile.Name}
				</h1>
				<p className="text-[20px]">
					<b>Department:</b> {profile.Department}
				</p>
				<p className="text-[20px]">
					<b>Team:</b> {profile.teamId}
				</p>
				<p className="text-[20px]">
					<b>Years Of Experience:</b> {profile["Years of Experience"]}
				</p>
			</div>
		</div>
	);
};

const SideCards = ({ height, children }) => {
	return (
		<div
			className="bg-custom-grey-500 rounded-[20px] p-5 shadow-md mb-5 w-full"
			style={{ height: height }}
		>
			{children}
		</div>
	);
};

export default Profile;
