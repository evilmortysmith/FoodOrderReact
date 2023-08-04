import React from 'react';
import styles from "./Modal.module.css"
import ReactDOM from 'react-dom';

const BackDrop = (props) => {
    return <div className={styles.backdrop}></div>
};
const ModalOverlay = (props) => {
    return <div className={styles.modal}>
        <div className={styles.content}>{props.children}</div>
    </div>
};

const portalElem = document.getElementById('overlays');

const Modal = (props) => {
    return (  
        <React.Fragment>
            {ReactDOM.createPortal(<BackDrop /> , portalElem)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay> , portalElem)}
        </React.Fragment>
    );
}
 
export default Modal;