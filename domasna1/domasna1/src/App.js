import React from 'react';
import {User} from './User';


let student1={
    name:'Paskalija',
    lastname:'Koneska',
    age: 24
}

let student2={
  name:'Kiril',
  lastname:'Jordanov',
  age: 23
}


export function App(){

  return(
    <div>
      <User student1={student1} student2={student2}/>
    </div>
  )
};