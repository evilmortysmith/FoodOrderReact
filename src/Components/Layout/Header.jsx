import React, { useState } from 'react';
import styles from "../Layout/Header.module.css";
import mealsImg from "../../assets/meals.jpg";
import HeaderCartButton from './HeaderCartButton';


const Header = (props) => {
    return (
        <React.Fragment>
            <header className={styles["header"]}>
                <h1>ReactMeals</h1>
                <HeaderCartButton />
            </header>
            <div className={styles["main-image"]}>
                <img src={mealsImg} alt="A table full of delilcious food!" />
            </div>
        </React.Fragment>
    );
}

export default Header;