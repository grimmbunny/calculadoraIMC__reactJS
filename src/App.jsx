import { useState } from 'react'
import './App.css'

function App() {
  const [altura, setAltura] = useState('')
  const [peso, setPeso] = useState('')


  const renderizaIMC = () => {
    if (!altura || !peso) {
      return <p>Por favor, digite valores válidos para altura e peso.</p>
    }


    const IMC = peso / (altura * altura);


    if (IMC <= 18.4 ) {
        return (
            <p>Abaixo do peso</p>
        )
    } else if (IMC >= 25){
    return ( 
        <p>Acima do peso</p>
    )
} else {
  return ( 
      <p>Peso normal</p>
  )
}
}



  return (
    <>
    <form>
      <input type="number"  placeholder='Digite a altura' onChange={evento => setAltura(parseFloat(evento.target.value))} />
      <input type="number" placeholder='Digite o peso' onChange={evento => setPeso(parseFloat(evento.target.value))}/>
    </form>
    {renderizaIMC()}
    </>
  )
}

export default App
