import React from 'react'
import './css/Especial.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Especial = ({ addToCart }) => {
  const specialProduct = {
    id: 16,
    image: "https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-bk-argentina//home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/5/BK_WEB_Whopper-Guacamole_1200X900_210922.png",
    title: "Doble Doble",
    description: "Doble carne, doble queso, lechuga, tomate, cebolla, pepinillos, salta especial.",
    rating: "4.6",
    price: "15000",
  };

  const handleAddToCart = () => {
    addToCart(specialProduct);
  };
  return (
    <div className='container especial'>
      <div className="txt">
        <h2>Recomendacion de la casa</h2>
        <h4>Doble Doble 500gr</h4>
        <p>¡Un festín para los amantes de las hamburguesas! Dos jugosas carnes asadas a la perfección, fundidas con doble capa de queso derretido, acompañadas de crujiente lechuga, rodajas frescas de tomate, cebolla caramelizada, y pepinillos encurtidos. Todo ello bañado en nuestra irresistible salsa especial, que añade un toque único a cada bocado. Una combinación perfecta de sabores y texturas que hará que no puedas resistirte.</p>
        <button className="btn-especial" onClick={handleAddToCart}>
          <FontAwesomeIcon icon={faCartShopping} /> Añadir al Carrito
        </button>
      </div>
    </div>
  )
}

export default Especial