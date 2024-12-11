import React from 'react';
import './css/Hero.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; // Importamos Link
import videoBg from '../assets/79170-568265347_small.mp4'

const Hero = ({ addToCart }) => {
  const specialProduct = {
    id: 999,
    image: 'https://res.cloudinary.com/dtxdv136u/image/upload/v1733412574/1dp7XQB_nuuyym.webp',
    title: 'Especial de la Casa',
    description: 'Bondiola de cerdo desmenuzada, morrones grillados, cebolla crispy, queso cheddar y salsa bbq.',
    price: 15000,
  };

  const handleAddToCart = () => {
    addToCart(specialProduct);
  };

  return (
    <section className="hero">
      <video src={videoBg} autoPlay loop muted />
      <section className="txt">
        <h1>Probá el nuevo especial de la casa</h1>
        <p>{specialProduct.description}</p>
        <div className="buttons">
          <button className="btn-primary" onClick={handleAddToCart}>
            <FontAwesomeIcon icon={faCartShopping} /> Añadir al Carrito
          </button>
          <Link to="/menu" className="btn-secondary"> {/* Cambiamos el botón por un enlace */}
          <FontAwesomeIcon icon={faUtensils} /> Ver el Menú
          </Link>
        </div>
      </section>
      <section className="img-container">
        <img src={specialProduct.image} alt="A bowl of delicious food" className="hero-img" />
      </section>
    </section>
  );
};

export default Hero;
