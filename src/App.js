import React, { useState }  from 'react';
import './App.css';
import Home from './pages/Home';



function App() {

  const [Student , setStudent] = useState([
    {id:1 , name:"Alice Johnson" , age:20 , course:"Mathematics" , image:"" } ,

    {id:2 , name:"Bob Smith" , age:22 , course:"Science" , image:"" } ,

    {id:3 , name:"Charlie Brown" , age:21 , course:"Literature" , image:" " } ,

    {id:4 , name:"Diana Prince" , age:23 , course:"History" , image:"" } ,

    {id:5 , name:"Ethan Hunt" , age:20 , course:"Engineering" , image:"" } ,

    {id:6 , name:"Fiona Gallagher" , age:22 , course:"Art" , image:"" }
  ])


  return (
    <div className="App  container mt-5">
        
      <h1 className="text-center mb-4">Student List</h1>
      <Home student={Student} />
      
   


    </div>
   
  );
}

export default App;
