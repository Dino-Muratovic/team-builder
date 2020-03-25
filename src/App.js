import React, { useState } from 'react';
import './App.css';
import Form from './Form';


// Give the state variable you just declared a default value.
//  You will need to keep track of a list of team members and each team member will have several key/value pairs associated with them.
const initialMembers = [
  {fullName:" ", email:" " , role:" " } 
]



function App() {
  // Import the useState hook and set up a state property for your team members list

  //useState for the initials members 
  const [members, setMembers] = useState(initialMembers);
 
//create on input event listener
    const onInputChange = event => {    
    // console.log(`this is target name`, event.target.name);
    // console.log(`this is target value`, event.target.value);
    
    const inputThatChanged = event.target.name
    const newValueForInput = event.target.value

    setMembers({
      ...members, 
      [inputThatChanged]: newValueForInput
    })  
    console.log(members);
    
  }

  

  return (
    <div className="App">
      {/* pass this down to form.js */}
     <Form
      onInputChange={onInputChange}
      members={members}            
      /> 
    </div>
  );
}

export default App;
