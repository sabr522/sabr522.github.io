import axios from "axios";

const getRemarks = () => {
	const request = axios.get("/api/indiv_strength");
	return request.then((response) => {
		return response.data;
	});
};

const getMembers = () => {
	const request = axios.get(`/api/group_generation`);
	return request.then((response) => {
		return response.data;
	});
};

export default { getRemarks, getMembers };
