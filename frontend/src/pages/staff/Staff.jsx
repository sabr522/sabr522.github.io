import { useLocation } from "react-router-dom";
import StaffSideBar from "../../components/StaffSideBar";
import targetBoard from "../../assets/psa/target_board.png";
import trophy from "../../assets/psa/trophy.png";
import console from "../../assets/psa/game-console.png";
import play from "../../assets/psa/playButtonIcon.png";
import profilePic from "../../assets/psa/profile_pic.png";
import { RadarChart } from "../../components/RadarChart";

const Staff = () => {
	return (
		<div className="flex mr-12">
			<StaffSideBar />
			<div className="flex flex-col gap-5 h-full w-full">
				<TopPortion />
				<div className="flex w-full h-full">
					<div className="mr-5 min-w-[50%] flex flex-col gap-5">
						<ProfileCard />
						<MembersCard />
					</div>
					<div className="h-full w-[50%] flex flex-col gap-5">
						<SkillCard />
            <RecommendedCard />
					</div>
				</div>
			</div>
		</div>
	);
};

const TopPortion = () => {
	const location = useLocation();
	const { personName } = location.state || {};

	return (
		<div className="w-full ">
			<h3 className="text-2xl font-semibold mt-[20px] mb-[20px]">
				Good morning {personName}
			</h3>
			<div className="flex flex-col gap-5 h-full">
				<TopBanner />
			</div>
		</div>
	);
};

const TopBanner = () => {
	return (
		<div className="flex w-full h-[18%] py-5 px-5 rounded-[30px] bg-custom-purple-600">
			{/* First section with target board */}
			<div className="flex flex-[2] items-center justify-center border-r border-white/30 pr-5">
				<img
					src={targetBoard}
					alt="Target"
					className="w[80%] min-h-[110px] mr-4"
				/>
				<div className="flex flex-col space-y-1">
					<p className="font-bold text-custom-yellow-400 text-3xl">
						Win Rate
					</p>
					<p className="text-3xl font-bold">
						84%{" "}
						<span className="text-lg text-custom-small-grey-400">
							correct
						</span>
					</p>
					<p className="text-custom-red-400 text-lg">
						↓1%{" "}
						<span className="text-custom-small-grey-400">
							this month
						</span>
					</p>
				</div>
			</div>

			{/* Second section */}
			<div className="flex flex-[2] items-center justify-center border-r border-white/30 pr-5">
				<img
					src={trophy}
					alt="Trophy"
					className="w[80%] min-h-[110px] mr-4"
				/>
				<div className="flex flex-col space-y-1">
					<p className="font-bold text-custom-yellow-400 text-3xl">
						Play Time
					</p>
					<p className="text-3xl font-bold">
						20{" "}
						<span className="text-lg text-custom-small-grey-400">
							hours
						</span>
					</p>
					<p className="text-custom-green-400 text-lg">
						↑12%{" "}
						<span className="text-custom-small-grey-400">
							this week
						</span>
					</p>
				</div>
			</div>

			{/* Third section with button */}
			<div className="flex flex-[3] items-center justify-center">
				<img
					src={console}
					alt="Console"
					className="w[80%] min-h-[110px] mx-4"
				/>
				<div className="flex flex-col space-y-1">
					<p className="font-bold text-custom-yellow-400 text-[28px]">
						Courses Completed
					</p>
					<p className="text-3xl font-bold">
						12{" "}
						<span className="text-lg text-custom-small-grey-400">
							matches
						</span>
					</p>
					<p className="text-custom-green-400 text-lg">↑ Top 10%</p>
				</div>
				<PlayButton />
			</div>
		</div>
	);
};

const PlayButton = () => {
	return (
		<>
			<button className="ml-5 mt-3">
				<img
					src={play}
					alt="Play Button"
					className="w[80%] min-h-[110px] "
				/>
			</button>
		</>
	);
};

const ProfileCard = () => {
	const location = useLocation();
	const { personName } = location.state || {};

	return (
		<div className="flex p-6 rounded-2xl items-center border-2 border-gray-200 shadow-lg ">
			{/* Profile Picture */}
			<img
				src={profilePic}
				alt="Profile Picture"
				className="w-[150px] h-[150px] rounded-full border-4 border-custom-yellow-400 shadow-md mr-6"
			/>

			{/* Name and Info */}
			<div className="flex flex-col h-[220px] gap-4 my-3 ml-3">
				<h1 className="font-extrabold text-2xl border-b-4 border-custom-yellow-400 pb-2">
					Name: {personName}
				</h1>

				{/* Department */}
				<p className="flex items-center gap-2">
					<span className="text-custom-yellow-400 font-bold">
						🏢 Department:
					</span>
					PSA Forklifter
				</p>

				{/* Team */}
				<p className="flex items-center gap-2">
					<span className="text-custom-yellow-400 font-bold">
						🛡 Team:
					</span>
					Group 1
				</p>

				{/* Years of Experience */}
				<p className="flex items-center gap-2">
					<span className="text-custom-yellow-400 font-bold">
						📅 Years of Experience:
					</span>
					4
				</p>

				{/* Level / Progress Bar */}
				<div className="flex items-center gap-2">
					<span className="font-bold text-lg">Level 4</span>
					<div className="w-full bg-gray-300 rounded-full h-3">
						<div
							className="bg-custom-yellow-400 h-3 rounded-full"
							style={{ width: "80%" }}
						></div>
					</div>
				</div>
			</div>
		</div>
	);
};

const MembersCard = () => {
	return (
		<div className="flex flex-col p-6 rounded-2xl items-center border-2 border-gray-200 shadow-lg min-h-[470px]">
			<h2 className="font-bold text-2xl mb-6">Team Members</h2>
			<div className="flex flex-col gap-5 w-full h-full">
				<div className="flex flex-col bg-gradient-to-br from-custom-purple-500 to-custom-purple-600 items-center justify-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition transform hover:scale-105">
					<h3 className="font-semibold text-2xl">Glenn Tan</h3>
				</div>

				<div className="flex flex-col bg-gradient-to-br  from-custom-purple-500 to-custom-purple-600 items-center justify-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition transform hover:scale-105">
					<h3 className="font-semibold text-2xl">Ethan Tan</h3>
				</div>

				<div className="flex flex-col bg-gradient-to-br from-custom-purple-500 to-custom-purple-600 items-center justify-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition transform hover:scale-105">
					<h3 className="font-semibold text-2xl">David Chen</h3>
				</div>

				<div className="flex flex-col bg-gradient-to-br  from-custom-purple-500 to-custom-purple-600 items-center justify-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition transform hover:scale-105">
					<h3 className="font-semibold text-2xl">Pan Xi Yi</h3>
				</div>
			</div>
		</div>
	);
};

const SkillCard = () => {
	return (
		<div className="border-2 min-h-[420px] rounded-xl border-gray-200 shadow-lg flex justify-center ">
			<RadarChart />
		</div>
	);
};

const RecommendedCard = () => {
	return (
		<div className="rounded-xl border-2 border-gray-200 shadow-lg min-h-[285px] p-5">
			<h3 className="font-bold text-2xl mb-3">Recommended Courses</h3>
			<div className="flex flex-col gap-5 w-full h-full">
				<div className="flex flex-col bg-gradient-to-br from-custom-purple-500 to-custom-purple-600 items-center justify-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition transform hover:scale-105">
					<h3 className="font-semibold text-2xl">GeekOut 2024</h3>
				</div>
				<div className="flex flex-col bg-gradient-to-br from-custom-purple-500 to-custom-purple-600 items-center justify-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition transform hover:scale-105">
					<h3 className="font-semibold text-2xl">Coding For Beginners</h3>
				</div>
			</div>
		</div>
	);
};

export default Staff;
