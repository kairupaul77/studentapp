import React from 'react';

function Home({ students }) {
  return (
    <div className="row">
      {((student) => (
        <div key={student.id} className="col-md-3 mb-4">
          <div className="card shadow-sm h-100">
            <img 
              src={student.image} 
              className="card-img-top" 
              alt={student.name} 
            />
            <div className="card-body">
              <h5 className="card-title">{student.name}</h5>
              <p className="card-text">
                <strong>Age:</strong> {student.age}
              </p>
              <p className="card-text">
                <strong>Course:</strong> {student.course}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
