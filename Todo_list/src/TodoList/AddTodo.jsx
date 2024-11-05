import { useState } from "react"

const AddTodo = ({ OnAddButtonClick }) => {
    let [name, Setname] = useState("")
    let [date, Setdate] = useState("")

    const onNameChange = (e) => {
        Setname(e.target.value)
    }
    const onDateChange = (e) => {
        Setdate(e.target.value)
    }
    const OnButtonClick = () => {
        OnAddButtonClick(name, date)
        Setname("")
        Setdate("")
    }


    return (
        <div className='container mt-5 '>
            <div className='row '>
                <div className='col-4 '>    
                    <input type="text" placeholder='Enter your task'
                        className='form-control,"border border-primary' onChange={onNameChange} value={name} />
                </div>
                <div className='col-4'>
                    <input type="date"
                        className='form-control,border border-primary' onChange={onDateChange} value={date} />
                </div>
                <div className='col-4'>
                    <button className='btn btn-outline-primary' onClick={OnButtonClick}>Add</button>
                </div>

            </div>
        </div>
    )
}
export default AddTodo
