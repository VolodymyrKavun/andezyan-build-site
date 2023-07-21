import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';

function Modal({ active, closeModal, children }) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  useEffect(() => {
    const onKeydown = e => {
      if (e.code !== 'Escape') return;
      closeModal();
    };

    window.addEventListener('keydown', onKeydown);
    return () => window.removeEventListener('keydown', onKeydown);
  }, [closeModal]);

  const modalContent = active ? (
    <div
      onClick={closeModal}
      className={
        active ? styles.backdrop + ' ' + styles.active : styles.backdrop
      }
    >
      <div
        onClick={e => e.stopPropagation()}
        className={
          active
            ? styles.modalContent + ' ' + styles.activeContent
            : styles.modalContent
        }
      >
        {children}
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    return createPortal(modalContent, document.getElementById('modal'));
  } else {
    return null;
  }
}

export default Modal;
