import SideBarDropdown from './SideBarDropdown'
import Logo from './Logo';
import { useNavigate } from 'react-router-dom';

const dropdownLeadership = [
	{ name: "Leaderboard", path: "/staff/leaderboard" },
	{ name: "Number 1", path: "/staff/leaderboard", employeeId: "1" },
];
const dropdownCourses = [
    { name: "Courses", path: "/staff/courses" },
	{ name: "New", path: "/staff/courses", employeeId: "2" },
]

const StaffSideBar = () => {
  return (
    <div className="mr-8 min-h-screen flex flex-col gap-5 w-[330px] px-8 shadow-md border-r-4 border-custom-gray p-4">
        <Logo />
        <NormalSideText namesTexts={["Profile"]} path={"/staff/profile"}/>
        <SideBarDropdown options={dropdownLeadership} defaultSelected={"/staff/leaderboard"}/>
        <SideBarDropdown options={dropdownCourses} defaultSelected={"/staff/courses"}/>
    </div>
  )
}

const NormalSideText = ({ namesTexts, path }) => {
    const navigate = useNavigate();
	const handleNavigate = () => {
		navigate(path);
	};

	return (
		<>
			{namesTexts.map((name) => (
				<p
					key={name}
					className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-custom-grey-400"
                    onClick={handleNavigate}
                >
					{name}
				</p>
			))}
		</>
	);
};

export default StaffSideBar