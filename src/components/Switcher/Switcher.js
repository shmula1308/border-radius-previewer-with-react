import './Switcher.css'

const switcher = (props) => {

  const assignedClasses = ['toggle'];
  if(!props.toggle) {
    assignedClasses.push('toggle')
  } else {
    assignedClasses.push('toggle toggle-active')
  }
    return (
            <div className="Switcher">
              <label htmlFor={props.id} className="label"
                >{props.label}</label>
              <button id={props.id} className="btn" onClick={props.click}>
                <span className={assignedClasses.join(" ")}></span>
              </button>
            </div>
          )
}


export default switcher;