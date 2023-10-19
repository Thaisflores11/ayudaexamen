
import Carta from './components/Carta'
import './App.css'
import { carta } from './assets/Template'
import Opciones from './components/Opciones'

function App() {

  return (
    
    <>
    {
      carta.map(cart=>{
        return(
          
          <Carta carta={cart}>
          <Opciones carta={cart}/>
          
          </Carta>
        )
      })
    } 
      
      
    </>
  )
}

export default App
