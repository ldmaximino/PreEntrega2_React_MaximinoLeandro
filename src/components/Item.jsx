import '../App.css';

export const Item = ({item}) => {
  let precioFormateado = item.precio.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 }); //da formato al precio unitario
  
  return (
    <>
      <article className="articulos">
        <div className="articulos-img">
          <img src={item.url1} alt={item.nombre} />
          <div className="texto-superpuesto">Acceder al Producto</div>
        </div>
        <div className="articulos-datos">
          <p className="articulos-datos-categoria">Categoría: {item.categoria}</p>
          <p className="articulos-datos-nombre">{item.nombre}</p>
          <p className="articulos-datos-precio">$ {precioFormateado}</p>
        </div>
      </article>
    </>
  );
 
}

