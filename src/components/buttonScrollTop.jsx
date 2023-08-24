import React, { useState, useEffect } from 'react';

export default function ButtonScrollTop() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) return setIsVisible(true);
        setIsVisible(false);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
        setTimeout(() => {
            window.scrollBy(0, -100);
        }, 2000);
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <button className={`${isVisible ? 'btn-scroll-show' : 'btn-scroll-hide'} text-white px-4 py-2 scroll-top`}onClick={scrollToTop}>
            Scroll to Top
        </button>
    );
};