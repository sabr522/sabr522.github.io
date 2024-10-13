import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Manager from "./pages/manager/Manager";
import Members from "./pages/manager/Members";
import Profile from "./pages/manager/profile";
import Staff from "./pages/staff/Staff";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/manager/teams" element={<Manager />} />
					<Route
						path="/manager/members"
						element={<Members />}
					></Route>
					<Route
						path="/manager/profile"
						element={<Profile />}
					></Route>
					<Route path="/staff/profile" element={<Staff />} />
					<Route path="*" element={<div>404: Page Not Found</div>} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
