import React from "react";
import styles from "./Main.module.css";
import Logo from "../images/Logo.svg"

const Main = () => {
  return (
    <div>
      <div className={styles.mainBG}>
        <div className={styles.container}>
          <div className={styles.logoDiv}><img src={Logo} className={styles.logo} alt="logo" /></div>

        </div>
      </div>
    </div>
  );
};

export default Main;
