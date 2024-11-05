import Style from './container.module.css'

export default function Container(props) {
    return (
        <div className={Style.container}> {props.children}</div>
    )
}
