import React, { useEffect, useState } from 'react'
import Adduser from './components/Adduser'
import Viewuser from './components/Viewuser'
import { db } from './components/Firebase'
import { collection, addDoc, getDocs, doc, deleteDoc, getDoc, updateDoc } from 'firebase/firestore'

export default function App() {

    const [user, setuser] = useState({})
    const [users, setusers] = useState({})
    const [Loading, setLoading] = useState({})

    const userRefCollection = collection(db, "curd")

    useEffect(() => {
        getdata()
    }, [])

    const getdata = async () => {
        setLoading(true)
        setuser([])
        const alluser = await getDocs(userRefCollection)

        var newUser = alluser.docs.map(ele => {
            setuser(currentuser => [...currentuser, { id: ele.id, uname: ele.data().uname, email: ele.data().email, phone: ele.data().phone }])
            setLoading(false)
        })
    }
    // ADD USER

    const addUserHandlerFunction = async (userdata) => {
        if (userdata.id) {
            await updateDoc(doc(db, "curd", userdata.id), { uname: userdata.uname, email: userdata.email, phone: userdata.phone })
        }
        else {
            await addDoc(userRefCollection, userdata)
        }
        getdata()

    }
    //    EDIT USER

    const edituser = async (id) => {

        const result = await getDoc(doc(db, "curd", id))
        setuser({ id: result.id, uname: result.data().uname, emal: result.data().email, phone: result.data().phone })
    }

    // delete user

    const deleteuser = async (id) => {
        await deleteDoc(doc(db, "curd", id))
        getdata()
    }






    return (<>

        <div className='container'>
            <div className='row'>
                <Adduser addUserHandlerFunction={addUserHandlerFunction} user={user}></Adduser>
                <div className='col-1'>
                    <Viewuser users={users} edituser={edituser} deleteuser={deleteuser} Loading={Loading}></Viewuser>

                </div>

            </div>

        </div>
    </>
    )
}
