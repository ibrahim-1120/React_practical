import React from 'react'
import { getDatabase, ref, set } from 'firebase/database'
import { app } from './firebase'

const db = getDatabase(app)

export default function App() {

  const addData = () => {
    set(ref(db, 'user/ibrahim'), {
      id: 1,
      name: 'ibrahim',
      email: 'ibrahim@gmail.com',
      age: 23
    }
    )

  }
  return (

    <button onClick={addData}> add data</button>
  )
}
