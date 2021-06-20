import React from 'react';
export function User(props){

    return(
        <div id='students'>
            <h1>Student 1</h1>
            <p>Name:{props.student1.name}</p>
            <p>Last Name:{props.student1.lastname}</p>
            <p>Age: {props.student1.age}</p>
            <h1>Student 2</h1>
            <p>Name:{props.student2.name}</p>
            <p>Last Name:{props.student2.lastname}</p>
            <p>Age: {props.student2.age}</p>
        </div>
    )
};