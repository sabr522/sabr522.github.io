const SearchBar = () => {
	return (
		<div className="flex items-center space-x-4 mb-6">
			{/* Search Input */}
			<div className="flex-1">
				<input
					type="text"
					placeholder="Search teams..."
					className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
				/>
			</div>

			{/* Sort Dropdown */}
			<div className="relative">
				<select className="block appearance-none w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
					<option value="score">Sort by: Score</option>
					<option value="teamName">Sort by: Team Name</option>
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
		</div>
	);
};

export default SearchBar;