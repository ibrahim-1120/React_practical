import React from 'react'

export default function Userdata({ user }) {

    const deleteuser = (uid) => {
        fetch(`http://localhost:3000/posts/$(uid)`)


    }
    return (
        <tr>
            <td>{user.id}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td><button className='btn btn-primary' onClick={() => deleteuser(user.id)}>Delete</button></td>
            <td><button className='btn btn-danger'>Update</button></td>
        </tr>
    )
}
