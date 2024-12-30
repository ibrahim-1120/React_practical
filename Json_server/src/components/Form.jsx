import React, { useEffect, useRef, useState } from 'react'
import Userdata from './Userdata'

export default function Form() {

    const username = useRef()
    const email = useRef()
    const phone = useRef()
    const passward = useRef()


    const adduser = (a) => {
        a.preventDefault()

        fetch("http://localhost:3000/posts", {
            method: "post",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
                "username": username.current.value,
                "email": email.current.value,
                "phone": phone.current.value,
                "passward": passward.current.value

            })

        })

        username.current.value = ""
        email.current.value = ""
        phone.current.value = ""
        passward.current.value = ""

    }


    const [user, setuser] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/posts").then(resp => {
            return resp.json()
        }).then(result => {
            setuser(result)
        }).catch(erro => {
            console.log("🚀 ~ fetch ~ erro:", erro)
        })
    }, [adduser])


    return (
        <div className="container">
            <div className="row">
                <div className="col-4 card mt-5 p-3">
                    <h1>User registration</h1>
                    <hr />
                    <form action="" onSubmit={adduser}>
                        <div className="form-group">
                            <label htmlFor="username"> User name</label>
                            <input type="text" ref={username} placeholder='Enter user name' className='form-control' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email"> Email</label>
                            <input type="text" ref={email} placeholder='Enter email' className='form-control' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="passward"> Passward</label>
                            <input type="text" ref={passward} placeholder='Enter passward' className='form-control' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone"> Phone no.</label>
                            <input type="text" ref={phone} placeholder='enter phone no.' className='form-control' />
                        </div>

                        <br />
                        <div className="gorm-group">
                            <button type='sumbit' className='btn btn-primary'> Sumbit</button>
                            <button type='reset' className='btn btn-primary m-2'> Reset</button>
                        </div>
                    </form>
                </div>
                <div className="col-1"></div>
                <div className="col-7 card mt-5 p-3">
                    <h1 align='center'>User details </h1>
                    <hr />
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Phone</th>
                            </tr>
                        </thead>
                        <tbody>
                            {user.map(ele => <Userdata key={ele.id} user={ele}></Userdata>)}

                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}
