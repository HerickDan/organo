import "./CampoTexto.css"

const CampoTexto = (props) => {
    const aoDigitado = (evento) =>{
        let valor =''
        valor = evento.target.value;
        console.log(valor)
    }


    return (
        <div class='CampoTexto'>
            <label >{props.label}</label>
            <input  onChange={aoDigitado}  required placeholder={props.placeholder}/>
        </div>

    )
}
export default CampoTexto