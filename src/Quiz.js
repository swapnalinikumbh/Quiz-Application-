import React, { useState } from "react";
import Question from "./Question";
import { useParams, useNavigate } from "react-router-dom";

const questionsData = [
    // Quiz 1
    [
        {
            text: "Javascript is an _______ language?",
            options: [
                "Object Oriented",
                "Object Based",
                "Procedural",
                "None of the above",
            ],
            correctAnswer: "Object Oriented",
        },
        {
            text: "Which of the following keywords is used to define a variable in Javascript?",
            options: ["Var", "let", "Both A and B", "None of the above"],
            correctAnswer: "Both A and B",
        },
        {
            text: "How can a datatype be declared to be a constant type?",
            options: ["const", "var", "let", "constant"],
            correctAnswer: "const",
        },
        {
            text: "When an operator’s value is NULL, the typeof returned by the unary operator is:",
            options: ["Boolean", "undefined", "Object", "Integer"],
            correctAnswer: "Object",
        },
        {
            text: "Which function is used to serialize an object into a JSON string in Javascript?",
            options: ["stringify()", "parse()", "convert()", "None of the above"],
            correctAnswer: "stringify()",
        },
    ],

    // Quiz 2
    [
        {
            text: "Which of the following is used in React.js to increase performance?",
            options: ["Virtual DOM", "Original DOM", "Both", "None of the above"],
            correctAnswer: "Virtual DOM",
        },
        {
            text: "What is ReactJS?",
            options: ["Server-side framework", "user interface", "Both", "None"],
            correctAnswer: "user interface",
        },
        {
            text: "Who created ReactJS?",
            options: ["Jordar Mike", "Jordan walke", "Tim lee", "Jordan lee"],
            correctAnswer: "Jordan walke",
        },
        {
            text: "In which language is React.js written?",
            options: ["Python", "JavaScript", "Java", "PHP"],
            correctAnswer: "JavaScript",
        },
        {
            text: "Which is Bable?",
            options: ["compiler", "Interpreter", "Transpiler", "None"],
            correctAnswer: "compiler",
        },
    ],

    // Quiz 3
    [
        {
            text: "In how many ways can CSS be written in?",
            options: ["1", "2", "3", "4"],
            correctAnswer: "3",
        },
        {
            text: "What type of CSS is generally recommended for designing large web pages?",
            options: ["Inline", "Internal", "External", "None"],
            correctAnswer: "External",
        },
        {
            text: "Which HTML tag is used to declare internal CSS?",
            options: ["<style>", "<link>", "<script>", "None"],
            correctAnswer: "<style>",
        },
        {
            text: "How can we select an element with a specific ID in CSS?",
            options: ["#", ".", "^", "None"],
            correctAnswer: "#",
        },
        {
            text: "How can we write comments in CSS?",
            options: ["/**/", "//", "#", "All of the above"],
            correctAnswer: "/**/",
        },
    ],
];

const Quiz = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [answers, setAnswers] = useState(
        Array(questionsData[id - 1].length).fill(null)
    );
    const [quizSubmitted, setQuizSubmitted] = useState(false);

    if (id <= 0 || id > questionsData.length) {
        return <div className="container mt-5">Invalid quiz id</div>;
    }



    const handleAnswerChange = (index, answer) => {
        const newAnswers = [...answers];
        newAnswers[index] = answer;
        setAnswers(newAnswers);
    };

    const handleSubmit = () => {
        console.log(answers);
        setQuizSubmitted(true);

        // Navigate to the leaderboard after submitting
        navigate("/leaderboard");
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Quiz {id}</h1>
            {questionsData[id - 1].map((question, index) => (
                <div key={question.text} className="mb-4">
                    <Question
                        index={index}
                        question={question}
                        selectedAnswer={answers[index]}
                        onAnswerChange={handleAnswerChange}
                    />
                </div>
            ))}
            <button className="btn btn-success" onClick={handleSubmit}>
                Submit Answers
            </button>

            {quizSubmitted && (
                <div className="mt-3 alert alert-success">
                    Quiz submitted successfully!
                </div>
            )}
        </div>
    );
};

export default Quiz;
