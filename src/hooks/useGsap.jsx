import { useEffect } from 'react';
import gsap from 'gsap';

export const useGsap = (ref) => {
    useEffect(() => {
        const tl = gsap.timeline();

        // Mostrar el SVG con loading
        tl.to('.step-1', {
            opacity: 1,
            duration: 1.5,
        })
            // Ocultar el SVG inmediatamente después de que termine
            .to('.step-1', {
                opacity: 0,
                duration: 0.5,
            }, "+=0") // Inicia inmediatamente tras la anterior

            // Mostrar los elementos de la grilla desde la derecha
            .from('.grilla .item', {
                x: 1000,
                duration: 1,
                stagger: 0.3,
                ease: "power4.inOut"
            }, "-=0.5") // Sin retraso

            // Mover los elementos de la grilla hacia la izquierda
            .to('.grilla .item', {
                x: -300,
                duration: 1,
                stagger: 0.3,
            }, "-=0.5")

            // Continuar desplazando hacia la izquierda
            .to('.grilla .item', {
                x: -2000,
                duration: 2,
                stagger: 0.1,
                ease: "power4.inOut"
            }, "-=0.5")

            // Mostrar step-3 desde la derecha
            .from('.step-3', {
                x: 2000,
                duration: 0.1,
                ease: "power4.inOut"
            }, "+=0")

            // Desaparecer step-3 hacia la izquierda
            .to('.step-3', {
                x: -5500,
                duration: 4,
                ease: "power3.inOut"
            }, "+=0")
    }, [ref]);
};
