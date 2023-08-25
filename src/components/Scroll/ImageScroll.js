// Photos from https://citizenofnowhe.re/lines-of-the-city
import "./styles.css";
import { useRef } from "react";
import img1 from "../../img/1.png"
import img2 from "../../img/2.png"
import img3 from "../../img/3.png"

import {
    motion,
    useScroll,
    useSpring,
    useTransform
} from "framer-motion";

function useParallax(value, distance) {
    return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ id, name, img }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 300);

    return (
        <section className="section__scroll">
            <div ref={ref}>
                <img className="img__scroll rounded-xl" src={img} alt="..." />
            </div>
            <motion.h2 className="h2__scroll" style={{ y }}>{name}</motion.h2>
        </section>
    );
}

export default function AppParallax() {

    const imgs = [
        {
            id: 1,
            name: "Syncpro",
            img: img1
        },
        {
            id: 2,
            name: "Journal",
            img: img2
        },
        {
            id: 3,
            name: "Encrypter",
            img: img3
        }
    ]

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <>
            {imgs.map((image) => (
                <Image id={image.id} name={image.name} img={image.img} />
            ))}
            <motion.div className="progress text-cyan-300 bg-cyan-400 div__scroll" style={{ scaleX }} />
        </>
    );
}
