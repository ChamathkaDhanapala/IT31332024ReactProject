import React, { useState } from 'react';
import { students } from './StudentsDb';
import StudentTable from './components/StudentTable';
import StudentProfile from './components/StudentProfile';
import FontSizeChanger from './components/FontSizeChanger';
import './compo.css';
import './App.css';

const App = () => {
  const [students] = useState(StudentsDb);
  const [selectedStudent, setSelectedStudent] = useState(students[0]);
  const [fontSize, setFontSize] = useState("16px");

  const selectStudent = (index) => {
    setSelectedStudent(students[index]);
  };

  return (
    <>
    
      <h2 className="topic">Students Information Portal</h2>
      <hr />
      <FontSizeChanger fontSize={fontSize} setFontSize={setFontSize} />
      <hr/>
      <div className="outerDiv" style={{ fontSize }}>
       
        <div className="leftDiv">
          
          <br />
          <Table students={students} selectStudent={selectStudent} />
        </div>
        <div className="rightDiv">
          <Profile student={selectedStudent} />
        </div>
      </div>
    </>
  );
};

export default App;
