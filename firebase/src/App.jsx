import React, { useEffect, useRef, useState } from 'react'
// import { getDatabase, ref, set } from 'firebase/database'
// import { app } from './firebase'

import { db } from './firebase-confic'

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc
} from 'firebase/firestore'

export default function App() {

  const usercollectionRef = collection(db, "students")
  const username = useRef()
  const email = useRef()
  const age = useRef()


  const newUser = () => {
    const u1 = { "username": username.current.value, "email": email.current.value, "age": age.current.value }

    username.current.value = ""
    email.current.value = ""
    age.current.value = ""
    getMarkers()
    return addDoc(usercollectionRef, u1)
  }

  useEffect(() => {
    getMarkers()
  }, [])

  async function getMarkers() {

    const querySnapshot = await getDocs(usercollectionRef);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.data());
    });

  }



  // const addData = () => {
  //   set(ref(db, 'user/ibrahim'), {
  //     id: 1,
  //     name: 'ibrahim',
  //     email: 'ibrahim@gmail.com',
  //     age: 23
  //   }
  //   )



  return (
    // <button onClick={addUser}>Click here</button>
    // <button onClick={addData}> add data</button>
    <div>
      <form action="" onSubmit={newUser}>
        <input type="text" placeholder='enter user name' ref={username} />
        <input type="text" placeholder='enter email' ref={email} />
        <input type="text" placeholder='enter age' ref={age} />
        <input type="submit" />
      </form>


    </div>

  )
}
