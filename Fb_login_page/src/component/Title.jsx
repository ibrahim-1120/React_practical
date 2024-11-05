import style from './title.module.css'

export default function Title() {
    return (<>
        {/* <div className={style.heading}>
        </div> */}
        <h1 className={style.heading} >facebook</h1>
        <div className={style.para}>
            <h3>Facebook helps you connect and share </h3>
            <h3>with the people in your life.</h3>
        </div>
    </>

    )
}
