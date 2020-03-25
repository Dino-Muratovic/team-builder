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
    setNewMembers({
      ...members, 
      [inputThatChanged]: newValueForInput
    })  
    
  }


//use state for added members
const [newMembers, setNewMembers] = useState(initialMembers);
  const onFormSubmit = event => {
    //stop the form from nasty reload
    event.preventDefault()    
    //let's add a new friend to the friends array in state
    //let's make a new friend

    const makeNewMember = {
      fullName: newMembers.fullName,
      email: newMembers.email,
      role: newMembers.role
    }   

    setMembers([...members, makeNewMember])
  }

  

  return (
    <div className="App">  
       

      {/* pass this down to form.js */}
     <Form
      onInputChange={onInputChange}
      members={members}
      onFormSubmit={onFormSubmit}         
      /> 
      {members.map(element=> {
        // console.log(`element`, element);
        return (
          <div>
            <p>{element.fullName}</p>           
            <p>{element.email}</p>
            <p>{element.role}</p>            
          </div>
        )
      })} 
    </div>
  );
}

export default App;
