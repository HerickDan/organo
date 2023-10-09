import "./Botao.css";

const Botao = (props) => {
    return(
        <button class='Botao'> 
            {props.texto}
        </button>
    )
}

export default Botao;