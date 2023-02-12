import React from "react";
import '../style/Question.scss'

function Question(props) {

    const onOptionChange = e => {
        props.setAnswer(e.target.value);
    };
    
    if(props.question) {
        return (
            <div className="question">
                <div className="question-title">
                    <p>{props.question.Title}</p>
                </div>
                <div className="question-content">
                    <p>{props.question.ID}. {props.question.Content}</p>
                </div>
                <div className="question-answer">
                    <input type="radio" value="Yes" name="select" checked={props.answer === "Yes"} onChange={onOptionChange} />
                    <label>Yes</label>
                    <input type="radio" value="No" name="select" checked={props.answer === "No"} onChange={onOptionChange} />
                    <label>No</label>
                </div>
            </div>
        );
    }
}

export default Question;

