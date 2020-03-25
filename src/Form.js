import React from 'react';


const Form = (props) => {    

    return (
        <form onSubmit={props.onFormSubmit}>

            <label>Full Name </label>
            <input 
            onChange={props.onInputChange}     
            value={props.members.fullName}       
            type="text"
            name="fullName"
            /> <br/>

            <label>Email </label>
            <input 
            onChange={props.onInputChange}
            value={props.members.email}   
            type="text" 
            name="email"
            /> <br/>

            <label>Role </label>
            <input
            onChange={props.onInputChange}
            value={props.members.role}   
            type="text"
            name="role"
             /> <br/>

        </form>
    )
}


export default Form;