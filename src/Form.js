import React from 'react';


const Form = (props) => {    

    return (
        <form>

            <label>Full Name </label>
            <input 
            onChange={props.onInputChange}            
            type="text"
            name="fullName"
            /> <br/>

            <label>Email </label>
            <input 
            onChange={props.onInputChange}
            type="text" 
            name="email"
            /> <br/>

            <label>Role </label>
            <input
            onChange={props.onInputChange}
            type="text"
            name="role"
             /> <br/>

        </form>
    )

}


export default Form;