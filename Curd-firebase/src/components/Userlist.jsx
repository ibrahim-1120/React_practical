import React from 'react'

export default function Userlist({ deleteuser, edituser, cuser }) {



    return (<tr>
        <td>{cuser.uname}</td>
        <td>{cuser.email}</td>
        <td>{cuser.phone}</td>
        <td><button className='btn btn-danger' onClick={e => deleteuser(cuser.id)}>Delete</button></td>
        <td><button className='btn btn-primary' onClick={e => edituser(cuser.id)}>Edit</button></td>
    </tr>

    )
}
