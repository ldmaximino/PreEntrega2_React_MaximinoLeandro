import cartW from '../assets/cart.png';
import '../App.css';

export const CartWidget = () => {
  return (
    <div className="cart">
      <img className="cart-img" src={cartW} alt="Carrito de Compras" />
      <p>0</p>
    </div>
  )
}
