import React from 'react';
import styles from 'styles/components/modal.module.scss';

const Modal = ({ children, closeModal }) => {

    return (
        <div className={styles.modal}>
            <div className={styles.modal_overlay} onClick={closeModal} />
            <div className={styles.modal_box}>
                <button aria-label="Close the modal by clicking here" onClick={closeModal} className={styles.modal_close} ></button>
                {children}
            </div>
        </div>
    );
};

export default Modal;