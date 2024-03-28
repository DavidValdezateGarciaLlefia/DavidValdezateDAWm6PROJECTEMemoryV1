import { arrayPersonajes } from "../bd/arrayPersonajes";
import { Tarjeta } from "./Tarjeta";

export function GrupoTarjetas() {
  return (
    <div className=" flex flex-wrap gap-2 bg-slate-700 p-5">
      {
        arrayPersonajes.map((item) => (
          <Tarjeta nombre={item.nombre} imagen={item.imagen} key={item.nombre}/>
        ))
      }
    </div>
  );
}