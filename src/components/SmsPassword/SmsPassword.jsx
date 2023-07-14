import React from "react";
import styles from "./SmsPassword.module.css";
import Logo from "../images/Logo.svg";
import { NavLink } from "react-router-dom";

const SmsPassword = () => {
  return (
    <div className={styles.mainBG}>
      <div className={styles.insideBG}>
        <div className={styles.divLogo}>
          <img src={Logo} alt="" className={styles.logo} />
        </div>
        <p>Введите код от СМС</p>
        <div className={styles.inputDiv}>
          <input
            type="text"
            name="token"
            inputmode="numeric"
            pattern="[0-9]"
            autocomplete="one-time-code"
            className={styles.input}
          />
          <input
            type="text"
            name="token"
            inputmode="numeric"
            pattern="[0-9]"
            autocomplete="one-time-code"
            className={styles.input}
          />
          <input
            type="text"
            name="token"
            inputmode="numeric"
            pattern="[0-9]"
            autocomplete="one-time-code"
            className={styles.input}
          />
          <input
            type="text"
            name="token"
            inputmode="numeric"
            pattern="[0-9]"
            autocomplete="one-time-code"
            className={styles.input}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <p className={styles.bottomP}>Уже есть аккаунт?</p>
          <NavLink to={"/"} className={styles.enter}>
            Войти
          </NavLink>
        </div>
        <div className={styles.btn}>
          <span>Готово</span>
        </div>
      </div>
    </div>
  );
};

export default SmsPassword;
