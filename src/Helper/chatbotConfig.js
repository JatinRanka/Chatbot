import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';
import ResponseMessages from '../components/Chatbot/ResponseMessages';

const config = {
	initialMessages: [createChatBotMessage('Hello world!')],
	state: {
		responses: [] // to store the current list of responses fetched from the API
	},
	widgets: [
		{
			widgetName: 'responseMessages',
			widgetFunc: (props) => <ResponseMessages {...props} />,
			mapStateToProps: ['responses'],
			props: {}
		}
	]
};

export default config;
