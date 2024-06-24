
function CreateButton(props) {

    return(
        <button onClick={props.onClick} className={props.classes}>{props.textButton}</button>
    )
}
export default CreateButton 