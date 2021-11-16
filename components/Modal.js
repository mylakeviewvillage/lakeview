import React from 'react';
import styles from 'styles/components/modal.module.scss';

const Modal = ({ children, closeModal }) => {

    return (
        <div className={styles.modal}>
            <div className={styles.modal_overlay} onClick={closeModal} />
            <div className={styles.modal_box}>
                <img src='/img/close.svg' onClick={closeModal} className={styles.modal_close} />
                {children}
            </div>
        </div>
    );
};

export default Modal;