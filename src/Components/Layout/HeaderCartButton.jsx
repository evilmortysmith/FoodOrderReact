import React from 'react';
import styles from "../Layout/HeaderCartButton.module.css";
import CartIcon from "../Layout/CartIcon";

const HeaderCartButton = () => {
    return (  
        <button className={styles["button"]}>
            <span className={styles['icon']}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={styles['badge']}>
                3
            </span>
        </button>
    );
}
 
export default HeaderCartButton;