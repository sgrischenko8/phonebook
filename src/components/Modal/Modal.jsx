import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import styles from './Modal.module.css';
import { ContactForm } from 'src/components/ContactForm/ContactForm';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onClose, contact }) => {
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.code === 'Escape') {
        onClose();
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.target.nodeName === 'DIV') {
      onClose();
    }
  };

  return createPortal(
    <div className={styles.overlay} onMouseDown={handleBackdropClick}>
      <div className={styles.modal}>
        <ContactForm onClose={onClose} contact={contact} />
      </div>
    </div>,
    modalRoot,
  );
};
