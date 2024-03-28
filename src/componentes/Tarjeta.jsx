export function Tarjeta({ nombre, imagen }) {
    return (
      <div className="flex flex-col w-[150px] h-[200px] border p-2 bg-slate-200 shadow-lg rounded justify-between">
        {/* Contenedor de la imagen con altura fija o máxima */}
        <div className="h-[158px] flex justify-center items-center overflow-hidden">
          <img src={imagen} alt={nombre} className="max-h-full object-scale-down"/>
        </div>
        {/* Párrafo alineado al centro y colocado en la parte inferior */}
        <p className="text-center mt-auto">{nombre}</p>
      </div>
    );
  }