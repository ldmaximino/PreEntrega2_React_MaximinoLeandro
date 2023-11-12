import { priceFormat } from '../helpers/priceFormat';

import '../App.css';

export const ItemDetail = ({item}) => {

  return (
    
    <section className="item-detail">
        <div className="item-detail-01">
          <img src={item.url2} />
          <img src={item.url3} />
        </div>
        <div className="item-detail-02">
          <img src={item.url1} />
        </div>
        <div className="item-text">
            <p className="item-text-nombre">{item.nombre}</p>
            <p className="item-text-categoria">Categoria: {item.categoria}</p>
            <ol>
                {item.detalle1 && <li>{item.detalle1}</li>}
                {item.detalle2 && <li>{item.detalle2}</li>}
                {item.detalle3 && <li>{item.detalle3}</li>}
                {item.detalle4 && <li>{item.detalle4}</li>}
            </ol>
            <p className="item-text-precio">Precio $ {priceFormat(item.precio)}.-</p>
        </div>
    </section>
    

  )
}

/*
        <article className="container-detail1">
        <div className="images-second">
            <img className="image-second-1" src={item.url2} alt={item.nombre} />
            <img className="image-second-2" src={item.url3} alt={item.nombre} />
        </div>
    </article>
    <article className="container-detail2">
        <div className="image-principal">
            <img src={item.url1} alt={item.nombre} />
        </div>
        <div className="text-principal"> 
            <span>Categoría: {item.categoria}</span>
            <p>{item.nombre}</p>
            <ol className="text-principal-details">
                {item.detalle1 && <li>{item.detalle1}</li>}
                {item.detalle2 && <li>{item.detalle2}</li>}
                {item.detalle3 && <li>{item.detalle3}</li>}
                {item.detalle4 && <li>{item.detalle4}</li>}
            </ol>
            <p className="text-principal-price">$ {precioFormateado}</p>
        </div>
    </article>
*/