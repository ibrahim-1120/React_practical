import { useEffect, useState } from "react"
import Login from "./component/Login"
// import Registration from "./components/Registration"
import { auth } from './component/firebase'
import Profile from "./component/Profile"

export default function App() {

  const [status, setstatus] = useState()

  useEffect(() => {

    const getuser = async () => {

      await auth.onAuthStateChanged((user) => {
        setstatus(user)
      })

    }
    getuser()
  }, [])
  return (<>
    {status ? <Profile></Profile> : <Login></Login>}
  </>
  )
}
