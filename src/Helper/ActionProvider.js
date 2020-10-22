class ActionProvider {
	constructor(createChatBotMessage, setStateFunc, createClientMessage) {
		this.createChatBotMessage = createChatBotMessage;
		this.setState = setStateFunc;
		this.createClientMessage = createClientMessage;
	}

	/*
		@desc: Displays all the responses for the query searched
	*/
	displayResponseMessages(responseMessages) {
		// To store the responseMessages received from API to chatbot state
		this.setState((prevState) => ({
			...prevState,
			responses: responseMessages
		}));

		const message = this.createChatBotMessage('Here are the responses', { widget: 'responseMessages' });
		this.updateChatbotState(message);
	}

	displayErrorMessage(errorMessage) {
		const message = this.createChatBotMessage(errorMessage);
		this.updateChatbotState(message);
	}

	// To update a new message in chatbot
	updateChatbotState(message) {
		this.setState((prevState) => ({
			...prevState,
			messages: [...prevState.messages, message]
		}));
	}
}

export default ActionProvider;
