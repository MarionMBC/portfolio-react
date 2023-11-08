import "./projects.css";
import { useState } from "react";
import { initialTabs as tabs } from "./Projects";
import { motion, AnimatePresence } from "framer-motion";


export default function AnimatedCard() {
    const [selectedTab, setSelectedTab] = useState(tabs[0]);

    return (
        <div className="window">
            <nav>
                <ul className="ul__animatedCards border-b border-gray-900 ">
                    {tabs.map((item) => (
                        <li
                            
                            key={item.label}
                            className={item === selectedTab ? "selected li__animatedCards border-b-2  border-gray-900" : "li__animatedCards"}
                            onClick={() => setSelectedTab(item)}
                        >

                            {`${item.label}`}
                            {item === selectedTab ? (
                                <motion.div className="underline motion__div" layoutId="underline" />
                            ) : null}
                        </li>
                    ))}
                </ul>
            </nav>
            <main className="main__animatedCards bg-white">
                <AnimatePresence >
                    <motion.div
                    className="" 
                        key={selectedTab ? selectedTab.label : "empty"}
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {selectedTab ? (
                            <img
                                className=" my-10 h-fit w-96 object-contain"
                                alt="dsf"
                                src={selectedTab.img}
                            />
                        ) : (
                            ""
                        )}
                    </motion.div>
                </AnimatePresence>
            </main>
        </div>
    );
}
