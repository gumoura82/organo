import './formulario.css'

const Formulario = (props) => {
    return(
            <div className="campo-texto">
                <label>{props.label}</label>
                <input type="text" placeholder= {props.placeholder}/>
            </div>
        )
}

export default Formulario