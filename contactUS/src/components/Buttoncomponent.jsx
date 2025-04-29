import style from "../styles/button.module.css"
const Buttoncomponent = (props) => {
  return (
    <div className={props.isOutline ? style.outline_btn: style.primary_btn}>
      {props.icone}
      {props.text}
    </div>
  )
}

export default Buttoncomponent
