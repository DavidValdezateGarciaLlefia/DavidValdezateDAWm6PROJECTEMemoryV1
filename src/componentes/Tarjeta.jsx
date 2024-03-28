export function Tarjeta({ nombre, imagen }) {
    return (
      <div className="flex flex-col w-[150px] h-[200px] border p-2 bg-slate-200 shadow-lg rounded justify-between">
        <div className="h-[158px] flex justify-center items-center overflow-hidden">
          <img src={imagen} alt={nombre} className="max-h-full object-scale-down"/>
        </div>
        <p className="text-center mt-auto">{nombre}</p>
      </div>
    );
  }