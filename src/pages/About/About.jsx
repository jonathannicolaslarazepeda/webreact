import React, { useEffect, useRef } from 'react';
import bgImg from '../../assets/about003.png';
import charaImg from '../../assets/about002.png';
import planeImg from '../../assets/about001.png';

const About = () => {
    const bgRef = useRef(null);
    const charaRef = useRef(null);
    const planeRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const value = window.scrollY;
            if (bgRef.current) bgRef.current.style.top = value * 0.7 + 'px';
            if (charaRef.current) charaRef.current.style.top = value * 0.4 + 'px';
            if (planeRef.current) planeRef.current.style.top = value * 0.2 + 'px';
            if (textRef.current) textRef.current.style.top = value * 1 + 'px';
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="about">
            <div className="parallax">
                <img src={bgImg} alt="" id="bg" ref={bgRef} />
                <img src={charaImg} alt="" id="chara" ref={charaRef} />
                <img src={planeImg} alt="" id="plane" ref={planeRef} />
                <h6 id="text" ref={textRef}>About me</h6>
            </div>

            <div className="about-text">
                <p>My work is primarily focused on Japanese aesthetics, particularly manga and anime, as well as ink and
                    watercolor techniques. I employ both traditional and digital methods, utilizing tools such as
                    Photoshop,
                    Clip Studio, and Illustrator.</p>

                <p>My name is Jonathan Lara (H. Batto), from Las Palmas de Gran Canaria.</p>

                <p>After studying Film and Show Production in Las Palmas, I moved to Madrid to complete my studies in
                    Photography for Film and TV, as well as a Master’s Degree in Screenwriting at TAI School (Rey Juan
                    Carlos University).</p>

                <p>After some time working in television and production companies, I traveled to Japan, where I ended up
                    studying Manga at Aichi Zoukei Design College (あいち造形デザイン専門学校).</p>

                <p>After the pandemic, I returned to Las Palmas, where I now publish online — both on Webtoon (in
                    English
                    and Spanish) and on DAYS NEO (in Japanese). As a screenwriter, I’ve published the graphic novel
                    “Sesión
                    de Tarde” (La Cúpula, 2016), together with Stephen Hausdorff, and the webcomic “Guionista &
                    Dibujante”,
                    alongside artist Paih.</p>

                <p>I would describe my style as classic manga, and I’m striving to make myself known as a comic creator,
                    which is what I truly want to do.</p>
            </div>
        </div>
    );
};

export default About;
