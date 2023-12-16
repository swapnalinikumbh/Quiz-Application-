import React from "react";
import { Link } from "react-router-dom";

const Student = ({ name, quizId }) => {
    return (
        <div className="card mt-3">
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <Link to={`/quiz/${quizId}`} className="btn btn-dark">
                    Start Quiz {quizId}
                </Link>
            </div>
        </div>
    );
};

export default Student;
