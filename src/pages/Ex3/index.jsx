
import { Link } from 'react-router-dom'


import './style.css'


import { useState } from 'react'


function Ex3() {


const [ total, setTotal ] = useState("")

const [ parcelas, setParcelas ] = useState("")


const [resultado,setResultado] = useState("")



function handleSubmit (event) {


event.preventDefault();


console.log(total,parcelas)


setResultado(total);



}
return (
<>

<h2>colocar o valor total</h2>

<form onSubmit={handleSubmit}>



<label>total</label>

<input

type="text"

value={total}


onChange={(event)=> setTotal(event.target.value) }


/>



<label>parcelas</label>



<input


type="text"


value={parcelas}


onChange={(event)=> setParcelas(event.target.value) }


/>


<p>{resultado}</p>



<button type="submit">enviar</button>

</form>


<br />


<Link to ="/">

<button>navegar para home </button>

</Link></>


)


}


export default Ex3


