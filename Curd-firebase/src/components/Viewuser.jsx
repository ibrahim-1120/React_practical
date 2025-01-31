import React from 'react'
import Userlist from './Userlist'
import Loading from './Loading'

export default function Viewuser({ users, edituser, deleteuser, loading }) {
    return (<div className='col-7 card mt-3p-3'>
        <h1 align='center'>User detail</h1>
        <hr />
        <table className='table'>
            <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Phone</th>
            </tr>
            {loading ? <Loading></Loading> : users.map(ele => <Userlist key={ele.id} cuser={ele} edituser={edituser} deleteuser={deleteuser}>  </Userlist>)}

        </table>

    </div>

    )
}
