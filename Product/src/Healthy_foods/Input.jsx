import style from './Input.module.css'

export default function Input({ inputhandeler }) {
    return (
        <input type="text" placeholder='Enter Foodname' className={style.input} onKeyUp={inputhandeler} />
    )
}
