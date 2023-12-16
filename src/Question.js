import React from "react";

const Question = ({ index, question, selectedAnswer, onAnswerChange }) => {
    return (
        <div>
            <p>{question.text}</p>
            <div className="options">
                {question.options.map((option, optionIndex) => (
                    <div key={optionIndex} className="form-check">
                        <input
                            type="radio"
                            id={`q${index}o${optionIndex}`}
                            name={`q${index}`}
                            className="form-check-input"
                            value={option}
                            checked={selectedAnswer === option}
                            onChange={() => onAnswerChange(index, option)}
                        />
                        <label
                            htmlFor={`q${index}o${optionIndex}`}
                            className="form-check-label"
                        >
                            {option}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Question;
