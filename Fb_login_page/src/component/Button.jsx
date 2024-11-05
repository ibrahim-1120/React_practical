import style from './Button.module.css'
export default function Button() {

    return (
        <>
            <button>Login</button>
            <br></br>
            <a href=""> Forget passward? </a>
            <div className={style.line}></div>
            <br></br>
        </>
    )
}
