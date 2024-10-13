import SearchBar from "./SearchBar";

const BentoCard = ({
	headers, // main and subHeader in the format of dict for Header and dict : array
}) => {
	const subHeaderStyle = `text-custom-grey-400 text-base w-full ${
		headers.subHeaders.length > 2
			? "absolute left-[150px] w-[73%] flex justify-around"
			: "text-right pr-9"
	} `;

	return (
		<div>
			{/* Bento card header */}
			<div className="h-[90px] flex items-center justify-between space-x-4 pb-4 mb-6">
				{/* Full-width border */}
				<div className="absolute inset-x-0 top-[120px] border-b-2 border-gray-100"></div>
				<div className="relative flex justify-between w-full px-4 ">
					{/* Main Header */}
					<div>
						{headers?.mainHeader && (
							<div className="mt-4 font-bold text-2xl text-gray-800">
								{headers.mainHeader}
							</div>
						)}
						{/* Subheaders */}
						{headers?.subHeaders?.length > 0 && (
							<div className="text-custom-grey-400 text-base mt-8">
								{headers.subHeaders[0]}
							</div>
						)}
					</div>

					{/* Optional second subheader */}
					<div className="mt-4">
						<SearchBar />
						{headers?.subHeaders?.[1] && (
							<div className={subHeaderStyle}>
								{headers.subHeaders.map((subHeader, index) =>
									subHeader == headers.subHeaders[0] ? (
										""
									) : (
										<span
											className="w-full text-right pr-9"
											key={index}
										>
											{subHeader}
										</span>
									)
								)}
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default BentoCard;
