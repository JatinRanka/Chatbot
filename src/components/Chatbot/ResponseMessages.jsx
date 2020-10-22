import React, { useState } from 'react';
import './ResponseMessages.css';

/* 
	@desc: returns an element comprising 
		 single response key (key name, question, answer)
*/
function SingleResponseComponent(props) {
	const response = props.response;
	const [showDescription, setShowDescription] = useState(false);

	function openQuestion() {
		setShowDescription(!showDescription);
	}

	return (
		<div className="response-box" key={response.key}>
			<div className="response-key-box" onClick={openQuestion}>
				<div className="response-key-heading"> {response.key} </div>
				{showDescription ? (
					<i className="material-icons">keyboard_arrow_up</i>
				) : (
					<i className="material-icons">keyboard_arrow_down</i>
				)}
			</div>

			{showDescription ? (
				<div className="description">
					<p className="question">
						<strong> {response.question} </strong>{' '}
					</p>
					<p className="answer"> {response.answer} </p>
				</div>
			) : null}
		</div>
	);
}

/* 
	@desc: returns a list comprising all the
			responses of the query searched
*/
function ResponseMessages(props) {
	const [responses] = useState(props.responses); // using useState will avoid changes when the component is re-rendered.

	return (
		<div>
			{responses.map((response) => {
				return <SingleResponseComponent key={response.key} response={response} />;
			})}
		</div>
	);
}

export default ResponseMessages;
