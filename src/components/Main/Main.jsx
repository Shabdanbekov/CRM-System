import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Main.module.css";
import Logo from "../images/Logo.svg";

const Main = () => {
  return (
    <div>
      <div className={styles.mainBG}>
        <div className={styles.container}>
          <div className={styles.logoDiv}>
            <img src={Logo} className={styles.logo} alt="logo" />
          </div>
          <div className={styles.titles}>
            <h2 className={styles.title}>Место где поёт душа</h2>
            <h3 className={styles.subtitle}>
              Мы ждем у себя в гостях душевные компании чтобы они получали
              удовольствие от приятных встреч в кругу друзей, семьи или
              сотредников. Нам будет приятно видеть как все в нашем заведении
              раскрываются когда поют, за ужином или за баром и поет душа.
            </h3>
          </div>
          <div className={styles.buttons}>
            <NavLink className={styles.singUp} to="/sign-in">
              Войти
            </NavLink>
            <NavLink className={styles.singIn} to={"/sign-up"}>
              Регистрация
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
