import React, { useEffect } from 'react';
import { galleryData } from '../../data/gallery-data';
import GalleryItem from '../../components/gallery-item/GalleryItem';

const Home = () => {
    useEffect(() => {
        const reveal = () => {
            const reveals = document.querySelectorAll(".reveal");

            for (let i = 0; i < reveals.length; i++) {
                const windowHeight = window.innerHeight;
                const elementTop = reveals[i].getBoundingClientRect().top;
                const elementVisible = 150;

                if (elementTop < windowHeight - elementVisible) {
                    reveals[i].classList.add("active");
                } else {
                    reveals[i].classList.remove("active");
                }
            }
        };

        window.addEventListener("scroll", reveal);
        // Trigger initial check
        reveal();

        return () => window.removeEventListener("scroll", reveal);
    }, []);

    return (
        <div className="gallery">
            {galleryData.map((item) => (
                <GalleryItem
                    key={item.id}
                    src={item.src}
                    title={item.title}
                    description={item.description}
                    className="reveal"
                />
            ))}
        </div>
    );
};

export default Home;
