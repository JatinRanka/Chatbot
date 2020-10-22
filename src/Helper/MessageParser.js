import axios from 'axios';
const ENDPOINT = 'https://4pjz1fqnp5.execute-api.ap-south-1.amazonaws.com/POC/SecurraAssistAutoCompleteFAQFulfilment';

class MessageParser {
	constructor(actionProvider, state) {
		this.actionProvider = actionProvider;
		this.state = state;
	}

	async parse(message) {
		try {
			const messageResponse = await axios.post(ENDPOINT, { type: 'Search', value: message });
			const messageData = messageResponse.data;

			if (messageData.responseCode !== -1) {
				this.actionProvider.displayResponseMessages(messageData.responseMessage);
			} else {
				this.actionProvider.displayErrorMessage(messageData.errorMessage);
			}
		} catch (error) {
			this.actionProvider.displayErrorMessage(error.message);
		}
	}
}

export default MessageParser;
