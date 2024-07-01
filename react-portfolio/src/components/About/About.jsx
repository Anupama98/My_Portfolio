import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () =>{
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <dib className={styles.content}>
                <img
                    src={getImageUrl("about/aboutImage.png")}
                    alt = "Me sitting with a laptop"
                    className={styles.aboutImage}
                />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img
                        src ={getImageUrl("about/serverIcon.png")} alt = "Server icon"/>
                        
                        <div className={styles.aboutItemText}>
                            <h3>Backend Developer</h3>
                            <p>                           
Moving to the back end, I’m proficient in server-side languages like Java, SpringBoot or React JS .
I have extensive experience working with databases such as SQL, IBMDB2, and Hibernate, and 
I can design efficient database structures and write optimized queries. 
I’m familiar with RESTful APIs and know how to integrate them into applications to enable seamless communication between the front end and back end.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img 
                        src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon"/>
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p>
                            On the front-end side, I specialize in HTML, CSS, and JavaScript frameworks such as React and Angular. 
I’m passionate about creating intuitive user interfaces that provide an exceptional user experience. 
I pay great attention to detail, ensuring that the websites or applications I develop are responsive, 
visually appealing, and accessible across different devices and browsers.
                            </p>
                        </div>
                    </li>



                </ul>

            </dib>
        </section>
    );
};