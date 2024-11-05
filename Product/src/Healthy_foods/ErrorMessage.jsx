
const ErrorMessage = ({ fooditems }) => {
    return <>{fooditems.length == 0 ? <h3>I am still Hungry !!!</h3> : null}</>
}

export default ErrorMessage