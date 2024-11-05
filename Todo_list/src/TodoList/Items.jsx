
export default function Items({ Todoname, Tododate, onRemoveClick }) {
    return (
        <div className='container mt-5 '>
            <div className='row'>
                <div className='col-4'><span> {Todoname}</span></div>
                <div className='col-4'><span> {Tododate}</span></div>
                <div className='col-4'><button className='btn btn btn-outline-danger' onClick={() => onRemoveClick(Todoname)}>Remove</button></div>

            </div>

        </div>
    )
}
