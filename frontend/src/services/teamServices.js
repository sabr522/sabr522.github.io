import axios from "axios";

const baseUrl = "/api/";

// get groups JSON
const getTeams = () => {};

const getMembers = () => {
	const request = axios.get(`/api/group_generation`);
	return request.then((response) => {
        console.log("data coming from services", response.data)
		return response.data;
	});
};

export default { getTeams, getMembers };
