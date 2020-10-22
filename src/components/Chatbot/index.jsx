import React from 'react';
import Chatbot from 'react-chatbot-kit';

// Helper files
import config from '../../Helper/chatbotConfig';
import MessageParser from '../../Helper/MessageParser';
import ActionProvider from '../../Helper/ActionProvider';

function ChatbotComponent() {
	return (
		<div>
			<Chatbot 
				config={config} 
				actionProvider={ActionProvider} 
				messageParser={MessageParser}
			/>
		</div>
	);
}

export default ChatbotComponent;
