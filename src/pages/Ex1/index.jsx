import { Link } from 'react-router-dom'
import './style.css'
import { useState } from 'react'
function Ex1 () {
   const [ nome, setNome ] = useState("")
const [ preco, setPreco ] = useState("")
const [resultado,setResultado] = useState("") 

function handleSubmit (event) {
    event.preventDefault();
    console.log(nome,preco)
setResultado(preco);
}
    return (
        <>
     <h2>colocar nome e preço</h2>
        <form onSubmit={handleSubmit}>
            <label>nome</label>
            <input
             type="text" 
             value={nome}
             onChange={(event)=> setNome(event.target.value) }
             />

              <label>preço</label>
              <input
               type="preço" 
               value={preco}
             onChange={(event)=> setPreco(event.target.value) }
               />
               <p>{resultado}</p>
                  <button type="submit">enviar</button>

               <Link to ="/">
        <button>navegar para home </button>
        </Link>
        </form>
        </>
    ) 
}

export default Ex1