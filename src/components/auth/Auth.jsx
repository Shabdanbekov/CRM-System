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
        <div className={styles.form}>
          <label htmlFor="">Имя</label>
          <input type="text" />
          <label htmlFor="">Фамилия</label>
          <input type="text" />
          <label htmlFor="">Номер телефона</label>
          <input type="number" />
          <label htmlFor="">Дата рождения</label>
          <input type="number" />
          <label htmlFor="">Пароль</label>
          <input type="password" />
        </div>
      </div>
    </div>
  );
};

export default Auth;
