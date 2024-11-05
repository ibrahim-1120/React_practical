import React, { useState } from 'react'
import Title from './Student_reg/Title'
import Input from './Student_reg/Input'
import List from './Student_reg/List'


export default function App() {

  let [students, setstudents] = useState([])

  const addStudents = (name, email, phone) => {
    let newStudents = [...students, { name, email, phone }]
    setstudents(newStudents)
  }

  const removeStudent = (name) => {
    let newStudents = students.filter(student => student.name !== name)
    setstudents(newStudents)
  }


  return (
    <center>
      <Title></Title>
      <Input onAddButtonClick={addStudents}></Input>
      <List students={students} onRemovebuttonClick={removeStudent}></List>
    </center>
  )
}
