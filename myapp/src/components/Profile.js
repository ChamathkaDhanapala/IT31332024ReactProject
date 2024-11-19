import React from "react";

const Profile = ({ student }) => {
    return (
        <div className="profilecard">
            <img
                className="profile"
                src={`/assets/profilepic/${student.profilePic}`}
                alt="Profile"
            />
            <div className="prodetails">
                <p className="details">ID: {student.studentId}</p>
                <p className="details">Full Name: {`${student.firstName} ${student.lastName}`}</p>
                <p className="details">Age: {student.age}</p>
                <p className="details">Gender: {student.gender}</p>
                <p className="details">Course: {student.course}</p>
                <p className="details">Country: {student.address.country}</p>
                <p className="details">City: {student.address.city}</p>
                <p className="details">Skills: {student.skills.join(", ")}</p>
            </div>
        </div>
    );
};

export default Profile;
