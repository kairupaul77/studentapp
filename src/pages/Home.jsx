// src/Home.js
import React from 'react';
import Navbar from '../Components/Navbar';
import { useState } from 'react';
import { useEffect } from 'react';

const Home = ({ students }) => {
  return (
    <div className="container mt-5">
      <div className="row">
        {students.map((student) => (
          <div className="col-md-3 mb-4" key={student.id}>
            <div className="card h-100">
              <img src={student.image} className="card-img-top" alt={student.name} />
              <div className="card-body">
                <h5 className="card-title">{student.name}</h5>
                <p className="card-text">Age: {student.age}</p>
                <p className="card-text">Course: {student.course}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

function App() {
  const [students, setStudents] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/students')
      .then(res => res.json())
      .then(data => setStudents(data))
      .catch(error => console.error("Error fetching students:", error));
  }, []);

  return (
    <div>
      {/* Passing the state students to the Home component */}
      {students ? <Home students={students} /> : <p>Loading students...</p>}
    </div>
  );
}


export default Home;
