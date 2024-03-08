"use client";

import AllLinks from "./Links/Links";
import styles from "./navbar.module.css";

const Navbar = () => {

    return (
        <div className={styles.container}>
            <div className={styles.logo}>Logo</div>
            <div>
                <AllLinks />
            </div>
        </div>
    );
};

export default Navbar;
