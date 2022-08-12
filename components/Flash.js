const Flash = ({ success }) => {
	if (success === "true") {
		return <h1>Contact Successful</h1>;
	}
	if (success === "false") {
		return <h1>Contact Failed</h1>;
	}
	return <></>;
};

export default Flash;
