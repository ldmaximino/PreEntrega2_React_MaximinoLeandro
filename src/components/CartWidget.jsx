import cartW from '../assets/cart.png';
import '../App.css';

export const CartWidget = () => {
  return (
    <>
      <img className="cart" src={cartW} alt="Carrito de Compras" />
      <span>1</span>
    </>
  )
}
