import React, { useState } from 'react';
import Card from './Card';
import './css/Cards.css';
import data from '../utils/Data'; // Asegúrate de importar el arreglo de Data

const Cards = ({ onAddToCart }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Filtrar las tarjetas con rating >= 4.4
    const filteredData = data.filter((item) => item.rating >= 4.4);

    // Función para calcular las tres tarjetas visibles
    const getVisibleCards = () => {
        const visibleCards = [];
        for (let i = 0; i < 3; i++) {
            visibleCards.push(filteredData[(currentIndex + i) % filteredData.length]);
        }
        return visibleCards;
    };

    const handleNext = () => {
        const nextIndex = (currentIndex + 1) % filteredData.length; // Mueve el índice circularmente
        setCurrentIndex(nextIndex);
    };

    const handlePrev = () => {
        const prevIndex = (currentIndex - 1 + filteredData.length) % filteredData.length; // Mueve el índice circularmente hacia atrás
        setCurrentIndex(prevIndex);
    };

    return (
        <section className="menu">
            <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1026.1 60.11" fill='#CF2E26'>
                <path d="M78,2H97V21L78,22,76.85,41,77,40.91H57.92l0.16,0.16V22l-0.14.18L77,21Z" transform="translate(0 -0.05)" />
                <path d="M39.13,40.94H19V22l20-1V2H58L57.93,22.17,58.07,22H38.94V41.12Z" transform="translate(0 -0.05)" />
                <path d="M19,2V22.11L0,22V2H19Z" transform="translate(0 -0.05)" />
                <path d="M0,41H18.78V60H0V41Z" transform="translate(0 -0.05)" />
                <path d="M58.11,59.92H38.88L39,60,39.12,41l-0.19.18H58.07L57.91,41V60.11Z" transform="translate(0 -0.05)" />
                <path d="M155.46,1h19V20l-19,1-1.15,19,0.18-.14H135.38l0.16,0.16V21l-0.14.18L154.49,20Z" transform="translate(0 -0.05)" />
                <path d="M116.6,39.94H96.41V21l20.05-1V1h19l-0.07,20.12,0.14-.18H116.4V40.12Z" transform="translate(0 -0.05)" />
                <path d="M96.46,1V21.11l-19-.06V1h19Z" transform="translate(0 -0.05)" />
                <path d="M77.46,40H96.25V59H77.46V40Z" transform="translate(0 -0.05)" />
                <path d="M135.57,58.92H116.34L116.47,59,116.59,40l-0.19.18h19.13L135.37,40V59.11Z" transform="translate(0 -0.05)" />
                <path d="M232.4,1.53h19v19l-19,1-1.15,19,0.18-.14H212.32l0.16,0.16V21.47l-0.14.18,19.09-1.19Z" transform="translate(0 -0.05)" />
                <path d="M193.54,40.42H173.35V21.52l20.05-1v-19h19l-0.07,20.12,0.14-.18H193.34V40.6Z" transform="translate(0 -0.05)" />
                <path d="M173.4,1.53V21.59l-19-.06v-20h19Z" transform="translate(0 -0.05)" />
                <path d="M154.4,40.53h18.78v19H154.4v-19Z" transform="translate(0 -0.05)" />
                <path d="M212.51,59.39H193.28l0.13,0.12,0.12-19.08-0.19.18h19.13l-0.16-.16V59.59Z" transform="translate(0 -0.05)" />
                <path d="M309.87,0.53h19v19l-19,1-1.15,19,0.18-.14H289.78l0.16,0.16V20.47l-0.14.18,19.09-1.19Z" transform="translate(0 -0.05)" />
                <path d="M271,39.42H250.81V20.52l20-1v-19h19l-0.07,20.12,0.14-.18H270.81V39.6Z" transform="translate(0 -0.05)" />
                <path d="M250.87,0.53V20.59l-19-.06v-20h19Z" transform="translate(0 -0.05)" />
                <path d="M231.87,39.53h18.78v19H231.87v-19Z" transform="translate(0 -0.05)" />
                <path d="M290,58.39H270.77l0.13,0.12L271,39.43l-0.19.18H290l-0.16-.16V58.59Z" transform="translate(0 -0.05)" />
                <path d="M386.81,1h19V20l-19,1-1.15,19,0.18-.14H366.72L366.88,40V20.94l-0.14.18,19.09-1.19Z" transform="translate(0 -0.05)" />
                <path d="M347.94,39.89H327.75V21l20-1V1h19l-0.07,20.12,0.14-.18H347.75V40Z" transform="translate(0 -0.05)" />
                <path d="M327.81,1V21.11l-19-.06V1h19Z" transform="translate(0 -0.05)" />
                <path d="M308.81,40h18.78V59H308.81V40Z" transform="translate(0 -0.05)" />
                <path d="M366.92,58.87H347.69L347.82,59l0.12-19.08-0.19.18h19.13l-0.16-.16V59Z" transform="translate(0 -0.05)" />
                <path d="M464.27,0h19V19l-19,1-1.15,19,0.18-.14H444.19L444.34,39V19.94l-0.14.18,19.09-1.19Z" transform="translate(0 -0.05)" />
                <path d="M425.4,38.89H405.22V20l20-1V0h19L444.2,20.12l0.14-.18H425.21V39Z" transform="translate(0 -0.05)" />
                <path d="M405.27,0V20.11l-19-.06V0h19Z" transform="translate(0 -0.05)" />
                <path d="M386.27,39H405V58H386.27V39Z" transform="translate(0 -0.05)" />
                <path d="M444.38,57.87H425.15L425.28,58l0.12-19.08-0.19.18h19.13l-0.16-.16V58Z" transform="translate(0 -0.05)" />
                <path d="M543.37,2h19V21l-19,1-1.15,19,0.18-.14H523.28l0.16,0.16V22l-0.14.18L542.38,21Z" transform="translate(0 -0.05)" />
                <path d="M504.5,41H484.31V22.09l20-1V2h19l-0.07,20.12,0.14-.18H504.31V41.17Z" transform="translate(0 -0.05)" />
                <path d="M484.37,2V22.11l-19-.06V2h19Z" transform="translate(0 -0.05)" />
                <path d="M465.37,41h18.78V60H465.37V41Z" transform="translate(0 -0.05)" />
                <path d="M523.48,60H504.25L504.38,60,504.5,41l-0.19.18h19.13l-0.16-.1V60.16Z" transform="translate(0 -0.05)" />
                <path d="M620.83,1h19V20l-19,1-1.15,19,0.18-.14H600.75l0.16,0.16V21l-0.14.18L619.85,20Z" transform="translate(0 -0.05)" />
                <path d="M582,40H561.78V21.09l20-1V1h19l-0.07,20.12L600.9,21H581.77V40.17Z" transform="translate(0 -0.05)" />
                <path d="M561.83,1V21.11l-19-.06V1h19Z" transform="translate(0 -0.05)" />
                <path d="M542.83,40h18.78V59H542.83V40Z" transform="translate(0 -0.05)" />
                <path d="M600.94,59H581.71L581.84,59,582,40l-0.19.18H600.9l-0.15-.1V59.16Z" transform="translate(0 -0.05)" />
                <path d="M697.77,1.57h19v19l-19,1-1.15,19,0.18-.14H677.69l0.16,0.16V21.52l-0.14.18,19.09-1.19Z" transform="translate(0 -0.05)" />
                <path d="M658.9,40.46H638.72V21.56l20-1v-19h19L677.7,21.69l0.14-.18H658.71V40.65Z" transform="translate(0 -0.05)" />
                <path d="M638.77,1.57V21.63l-19-.06v-20h19Z" transform="translate(0 -0.05)" />
                <path d="M619.77,40.57h18.78v19H619.77v-19Z" transform="translate(0 -0.05)" />
                <path d="M677.88,59.44H658.65l0.13,0.12,0.12-19.08-0.19.18h19.13l-0.16-.16V59.64Z" transform="translate(0 -0.05)" />
                <path d="M775.24,0.57h19v19l-19,1-1.15,19,0.18-.14H755.15l0.16,0.16V20.52l-0.14.18,19.09-1.19Z" transform="translate(0 -0.05)" />
                <path d="M736.37,39.46H716.18V20.56l20-1v-19h19l-0.07,20.12,0.14-.18H736.17V39.65Z" transform="translate(0 -0.05)" />
                <path d="M716.24,0.57V20.63l-19-.06v-20h19Z" transform="translate(0 -0.05)" />
                <path d="M697.24,39.57H716v19H697.24v-19Z" transform="translate(0 -0.05)" />
                <path d="M755.35,58.44H736.12l0.13,0.12,0.12-19.08-0.19.18h19.13l-0.16-.16V58.64Z" transform="translate(0 -0.05)" />
                <path d="M852.17,1h19V20l-19,1L851,40l0.18-.14H832.09l0.16,0.16V21l-0.14.18L851.2,20Z" transform="translate(0 -0.05)" />
                <path d="M813.31,39.94H793.12V21l20-1V1h19L832.1,21.17l0.14-.18H813.11V40.12Z" transform="translate(0 -0.05)" />
                <path d="M793.17,1V21.11l-19-.06V1h19Z" transform="translate(0 -0.05)" />
                <path d="M774.17,40H793V59H774.17V40Z" transform="translate(0 -0.05)" />
                <path d="M832.29,58.92H813.06L813.18,59,813.3,40l-0.19.18h19.13L832.08,40V59.11Z" transform="translate(0 -0.05)" />
                <path d="M929.64,0h19V19l-19,1-1.15,19,0.18-.14H909.56l0.16,0.16V20l-0.14.18L928.67,19Z" transform="translate(0 -0.05)" />
                <path d="M890.77,38.94H870.59V20l20-1V0h19l-0.07,20.12,0.14-.18H890.58V39.12Z" transform="translate(0 -0.05)" />
                <path d="M870.64,0V20.11l-19-.06V0h19Z" transform="translate(0 -0.05)" />
                <path d="M851.64,39h18.78V58H851.64V39Z" transform="translate(0 -0.05)" />
                <path d="M909.75,57.92H890.52L890.65,58,890.77,39l-0.19.18h19.13L909.55,39V58.11Z" transform="translate(0 -0.05)" />
                <path d="M1007.1,0.55h19v19l-19,1-1.15,19,0.18-.14H987l0.16,0.16V20.49l-0.14.18,19.09-1.19Z" transform="translate(0 -0.05)" />
                <path d="M968.24,39.44H948V20.54l20-1v-19h19l0,20.13,0.14-.18H968V39.62Z" transform="translate(0 -0.05)" />
                <path d="M948.1,0.55V20.61l-19-.06v-20h19Z" transform="translate(0 -0.05)" />
                <path d="M929.1,39.55h18.78v19H929.1v-19Z" transform="translate(0 -0.05)" />
                <path d="M987.21,58.42H968l0.13,0.12,0.12-19.08-0.19.18h19.13L987,39.48V58.61Z" transform="translate(0 -0.05)" />
                <path d="M1025.1,57.94h-19.23l0.13,0.12L1006.12,39l-0.19.18h19.13L1024.9,39V58.14Z" transform="translate(0 -0.05)" />
            </svg>
            <h2>Conoce las estrellas</h2>
            <p>Estas son nuestras hamburguesas mejor valoradas.</p>
            <div className="slider-controls">
                <button onClick={handlePrev} className="arrow">←</button>
                <div className="menu-cards">
                    {getVisibleCards().map((item, index) => (
                        <Card
                            key={item.id}
                            id={item.id}
                            image={item.image}
                            title={item.title}
                            description={item.description}
                            rating={item.rating}
                            price={item.price}
                            onAddToCart={onAddToCart}
                            className={`card ${index === 1 ? 'medio' : ''}`} // La tarjeta central recibe la clase 'medio'
                        />
                    ))}
                </div>
                <button onClick={handleNext} className="arrow">→</button>
            </div>
        </section>
    );
};

export default Cards;
