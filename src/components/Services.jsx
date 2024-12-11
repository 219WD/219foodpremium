import React from 'react';
import Service from './Service';
import { faCreditCard, faShippingFast, faHome, faBoxOpen, faQrcode, faPercent, faChartLine } from '@fortawesome/free-solid-svg-icons';
import './css/Services.css';

const Services = () => {
    return (
        <section className="services">
            <h3>Te ofrecemos</h3>
            <div className="service-icons">
                <Service icon={faCreditCard} description="Formas de pago" size={2} />
                <Service icon={faPercent} description="Sin comisiones" size={2} />
                <Service icon={faChartLine} description="Analíticas" size={2} />
                <Service icon={faBoxOpen} description="Página de Producto" size={2} />
                <Service icon={faQrcode} description="Carta QR" size={2} />
            </div>
        </section>
    );
};

export default Services;
