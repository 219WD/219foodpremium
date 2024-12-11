import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import '../components/css/Individual.css';
import menuData from '../utils/Data';

const Individual = ({ addToCart }) => {
    const { id } = useParams();
    const product = menuData.find((item) => item.id === parseInt(id));

    if (!product) {
        return <p>Producto no encontrado</p>;
    }

    const handleAddToCart = () => {
        addToCart(product);
    };

    return (
        <section className="individual">
            <section className="txt">
                <h1>{product.title}</h1>
                <p>{product.presentacion}</p>
                <div className="icons">
                    {product.icons.map((icon, index) => (
                        <div className="icon" key={index}>
                            <div className="icon-img">
                                <img src={icon} alt={`Icon ${index}`} />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="buttons">
                    <button className="btn-primary-individual" onClick={handleAddToCart}>
                        <FontAwesomeIcon icon={faCartShopping} /> Añadir al Carrito
                    </button>
                    <Link to="/menu" className="btn-secondary-individual">
                        Ver el Menú
                    </Link>
                </div>
            </section>
            <section className="img-container">
                <img src={product.image} alt={product.title} className="individual-img" />
            </section>
        </section>
    );
};

export default Individual;
