import React from 'react'
import StudentList from './StudentList'

export default function List({ students, onRemovebuttonClick }) {

    return (<div className="container mt-3">
        <div className="row">
            <div className="col-12">
                <table className="table">
                    <tr>
                        <th>Username</th>
                        <th>email</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>

                    {students.map(student =>
                        <StudentList key={student.name} student={student} removeHandler={onRemovebuttonClick}></StudentList>)}
                </table>
            </div>

        </div>
    </div>
    )
}
