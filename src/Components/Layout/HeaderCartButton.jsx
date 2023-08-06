import React , {useEffect , useState} from 'react';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import styles from "../Layout/HeaderCartButton.module.css";
import CartIcon from "../Layout/CartIcon";

const HeaderCartButton = (props) => {
    const [btnIsHighlited , setBtnIsHighlited] = useState(false);

    const btnClasses =`${styles.button} ${btnIsHighlited ? styles.bump :""}`;

    const cartCtx = useContext(CartContext);
    const { items } = cartCtx;

    useEffect(()=>{
        if(cartCtx.items.length === 0)return;

        setBtnIsHighlited(true)

        const timer = setTimeout(() => {
            setBtnIsHighlited(false);
        }, 300);

        return () =>{
            clearTimeout(timer);
        };
    },[items])


    const numberOfCartItems = items.reduce((curNumber , item) => {
        return curNumber + item.amount;
    },0);

    return (  
        <button className={btnClasses} onClick={props.onClick}>
            <span className={styles['icon']}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={styles['badge']}>
                {numberOfCartItems}
            </span>
        </button>
    );
}
 
export default HeaderCartButton;