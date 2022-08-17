import Alert from "react-bootstrap/Alert";

const Flash = ({ success }) => {
	if (success === "true") {
		return (
			<Alert variant="success" className="contactAlert mb-3">
				Thank you for sending a message to our team at New Dawn Retreats!
			</Alert>
		);
	}
	if (success === "false") {
		return (
			<Alert variant="danger" className="contactAlert mb-3">
				An error has occurred in sending your message. If the error persists,
				please contact site owners with error. Sorry for the inconvenience.
			</Alert>
		);
	}
	return <></>;
};

export default Flash;
