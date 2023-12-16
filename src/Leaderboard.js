import React from "react";
import Student from "./Student";

const studentsData = [
    { name: "Student A", quizId: 1 },
    { name: "Student B", quizId: 2 },
    { name: "Student C", quizId: 3 },
];

const Leaderboard = () => {
    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Leaderboard</h1>
            {studentsData.map((student, index) => (
                <Student key={index} {...student} index={index + 1} />
            ))}

            <div className="mt-5">
                <h2 className="text-center mb-4">All Students' Ranks</h2>
                <ul className="list-group">
                    {studentsData.map((student, index) => (
                        <li key={index} className="list-group-item">
                            {`${index + 1}. ${student.name} - Quiz Rank: ${student.quizId}`}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Leaderboard;
