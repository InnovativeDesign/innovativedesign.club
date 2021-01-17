import React, { useState, useRef, useEffect } from 'react'
import '../css/components/floatin.scss'


export default function FadeInSection(props) {
    const [isVisible, setVisible] = useState(true);
    const domRef = useRef();
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });
        observer.observe(domRef.current);
        return () => observer.unobserve(domRef.current);
    }, []);
    const className = 'fade-in-' + props.dir
    return (
        <div
            className={`${className} ${isVisible ? 'is-visible' : ''}`}
            ref={domRef}
        >
            {props.content}
        </div>
    );
}