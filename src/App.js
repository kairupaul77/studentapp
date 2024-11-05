import React, { useEffect, useState } from "react";
import Home from "./pages/Home";// Make sure this component exists
import './App.css'; // Replace with the appropriate file if needed

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

export default App;