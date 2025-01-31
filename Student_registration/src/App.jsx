import React, { useState } from 'react'
import Title from './Student_reg/Title'
import Input from './Student_reg/Input'
import List from './Student_reg/List'

import { db } from './firebase'
import { collection, addDoc, getDoc } from 'firebase/firestore'


export default function App() {


  const studentscollection = collection(db, "studentreg")

  let [students, setstudents] = useState([])

  const addStudents = async (name, email, phone) => {

    addDoc(studentscollection, { name: name, email: email, phone: phone })
    let newStudents = [...students, { name, email, phone }]

    const studentdata = await getDoc(studentscollection)
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
