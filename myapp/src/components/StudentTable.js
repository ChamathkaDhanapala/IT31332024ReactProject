import React from 'react';
import './compo.css';

const StudentTable = ({ students, onViewProfile }) => {
    return (
        <table className="student-table">
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Course</th>
                    <th>Country</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {students.map((student) => (
                    <tr key={student.studentId}>
                        <td>{student.firstName}</td>
                        <td>{student.lastName}</td>
                        <td>{student.course}</td>
                        <td>{student.address.country}</td>
                        <td>
                            <button onClick={() => onViewProfile(student)}>View Profile</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default StudentTable;
