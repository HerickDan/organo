import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return(
       <div class='listaSuspensa'>
            <label>
                {props.label}
                <select>
                    {props.itens.map(item =><option key={item}>{item}</option>)}
                </select>
            </label>
       </div>)
}
export default ListaSuspensa;