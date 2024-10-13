export const RadarData = {
	labels: [
		"Critical Thinking",
		"Expertise",
		"Adaptability",
		"Collaboration",
		"Digital Thinking",
	],
	datasets: [
		{
			label: "LifeStats",
			backgroundColor: "rgba(120, 87, 255, 0.4)", // Semi-transparent blue background
			borderColor: "rgba(0, 0, 0, 1)", // Black border for clean look
			pointBackgroundColor: "#FFD700", // Gold points
			pointBorderColor: "#fff", // White border around points
			pointHoverBackgroundColor: "#fff",
			pointHoverBorderColor: "rgba(0, 0, 0, 1)", // Black on hover
			borderWidth: 3, // Thicker border for visibility
			data: [14, 12, 10, 7, 12], // Spreading out the data points
		},
	],
};

export const RadarOptions = {
	responsive: true,
	maintainAspectRatio: false,
	scales: {
		r: {
			ticks: {
				stepSize: 2, // Spacing for the data points
				min: 0,
				max: 16, // Spreads data points across more range
				showLabelBackdrop: false, // Hide the tick backdrop
				backdropColor: "rgba(0, 0, 0, 0)", // No backdrop for ticks
			},
			angleLines: {
				color: "rgba(255, 255, 255, 0.2)", // Lighter angle lines
				lineWidth: 2, // Thicker for better visibility
			},
			grid: {
				circular: true,
				color: "rgba(255, 255, 255, 0.1)", // Subtle gridlines
			},
			pointLabels: {
				color: "rgba(200, 200, 200, 1)", // Softer, less bright labels
				font: {
					size: 18, // Larger text size for readability
					weight: "bold", // Bold text for clarity
					family: "'Press Start 2P', cursive", // Retro style font
				},
			},
		},
	},
	plugins: {
		legend: {
			labels: {
				color: "rgba(200, 200, 200, 1)", // Softer legend color
				font: {
					size: 20, // Larger legend text
					family: "'Press Start 2P', cursive", // Same font as radar labels
				},
			},
		},
	},
};
