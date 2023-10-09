
import Botao from '../Botao';
import CampoTexto from '../CampoTexto/CampoTexto'
import ListaSuspensa from '../ListaSuspensa';
import './formulario.css'

const Formulario = () =>{
   const times =[
    'Programação',
    'Front-End',
    'Data-Science',
    'Nenhum']
    const aoSalvar = (evento) =>{
        evento.preventDefault();
        console.log('O formulário foi salvo')
    }

    return(
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h1>
                    Preencha o Formulário
                </h1>
                <CampoTexto label='Nome' placeholder='Digite o seu nome'/>
                <CampoTexto label='Cargo' placeholder='Digite o seu cargo'/>
                <CampoTexto label='Imagem' placeholder='Digite a URL da imagem'/>
               <ListaSuspensa label='Times' itens={times}/>
               <Botao texto='Criar Card'/>
                
            </form>
        </section> 
    )
}
export default Formulario;