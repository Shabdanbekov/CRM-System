import React from "react";
import styles from "./SignUp.module.css";
import Logo from "../../images/Logo.svg";
import InputMask from "react-input-mask";

const SignUp = () => {
  return (
    <div className={styles.mainBG}>
      <div className={styles.container}>
        <div>
          <img src={Logo} alt="logo" className={styles.logo} />
        </div>
        <div className={styles.form}>
          <label htmlFor="#">Имя</label>
          <input placeholder="Иван" type="text" />
          <label htmlFor="#">Фамилия</label>
          <input placeholder="Иванов" type="text" />
          <label htmlFor="#">Номер телефона</label>
          <InputMask mask="(+996) 999 99 99 99"></InputMask>
          <label htmlFor="#">Дата рождения</label>
          <input type="number" />
          <label htmlFor="#">Пароль</label>
          <input type="password" />
          <div className={styles.checkBox}>
            <input className={styles.radio} type="radio" />{" "}
            <div>
              <p className={styles.agrement}>
                Я прочитал и согласен с условиями{" "}
              </p>
              <a href="#" className={styles.agrementLink}>
                Пользовательского соглашения
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
