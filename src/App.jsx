
import './App.css'
import { Header } from './componentes/Header'
import { Juego } from './vistas/Juego/Juego'

function App() {
  return (
    <div className="">
      <Header />
      <div className="flex justify-center items-center min-h-screen">
        <Juego />
      </div>
    </div>
  );
}

export default App
