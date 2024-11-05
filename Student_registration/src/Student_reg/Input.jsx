import { useRef } from "react";


export default function Input({ onAddButtonClick }) {

    let nameRef = useRef("")
    let emailRef = useRef("")
    let phoneRef = useRef("")

    const addButtonHandeler = (e) => {

        e.preventDefault()
        onAddButtonClick(nameRef.current.value, emailRef.current.value, phoneRef.current.value)
        nameRef.current.value = ""
        emailRef.current.value = ""
        phoneRef.current.value = ""



        // onAddButtonClick(e.target[0].value, e.target[1].value, e.target[2].value)
        // console.log(e.target[0].value);

        // e.target[0].value = ""
        // e.target[1].value = ""
        // e.target[2].value = ""

    }
    return (
        <div className="container mt-5">
            <form onSubmit={addButtonHandeler}>
                <div className="row">
                    <div className="col-3">
                        <input type="text" placeholder="Enter username" className="form-control  border border-primary" ref={nameRef} />
                    </div>
                    <div className="col-3">
                        <input type="text" placeholder="Enter Email" className="form-control border border-primary" ref={emailRef} />
                    </div>
                    <div className="col-3">
                        <input type="text" placeholder="Enter Phone" className="form-control border border-primary" ref={phoneRef} />
                    </div>
                    <div className="col-3">
                        <button className="btn btn-outline-primary">Add</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
