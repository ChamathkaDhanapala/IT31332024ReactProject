import React, { useState } from "react";
import StudentsDb from './ StudentsDb';
import FontSizeSelector from "./components/FontSizeSelector";
import Table from "./components/Table";
import Profile from "./components/Profile";
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
      <FontSizeSelector fontSize={fontSize} setFontSize={setFontSize} />
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
