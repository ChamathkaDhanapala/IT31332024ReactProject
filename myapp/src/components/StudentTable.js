import React from 'react';

const StudentTable = ({ students, setSelectedStudent }) => {
  return (
    <div className="student-table">
      <h2>Students List</h2>
      <table>
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
                <button onClick={() => setSelectedStudent(student)}>
                  View Profile
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
