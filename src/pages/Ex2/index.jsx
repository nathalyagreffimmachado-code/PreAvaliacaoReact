import { Link } from 'react-router-dom'
import './style.css'
import { useState } from 'react'
function Ex2 () {
   const [ comprimento, setComprimento ] = useState("")
const [ largura, setLargura ] = useState("")
const [resultado,setResultado] = useState("") 

function handleSubmit (event) {
    event.preventDefault();
    console.log(comprimento,largura)
setResultado(comprimento*largura);
}
    return (
        <>
     <h2>colocar comprimento e largura</h2>
        <form onSubmit={handleSubmit}>
            <label>comprimento</label>
            <input
             type="text" 
             value={comprimento}
             onChange={(event)=> setComprimento(event.target.value) }
             />

              <label>largura</label>
              <input
               type="text" 
               value={largura}
             onChange={(event)=> setLargura(event.target.value) }
               />
               <p>{resultado}</p>
                  <button type="submit">enviar</button>
        </form>
    <br />
             <Link to ="/">
        <button>navegar para home </button>
        </Link>
        </>
    ) 
}

export default Ex2