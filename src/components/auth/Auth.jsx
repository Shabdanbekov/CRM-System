import React from "react";
import styles from "./Auth.module.css";
import Logo from "../images/Logo.svg";

const Auth = () => {
  return (
    <div className={styles.mainBG}>
      <div className={styles.container}>
        <div>
          <img src={Logo} alt="logo" className={styles.logo} />
        </div>
      </div>
    </div>
  );
};

export default Auth;
