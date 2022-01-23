import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ReactComponent as CloseModalBtn } from '../../components/Icons/Close.svg';
import PropTypes from 'prop-types';
import { text } from '../../helpers/text';
import st from './Modal.module.scss';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ onClose, children }) {
  useEffect(() => {
    const handleEscape = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  const handleClose = () => {
    onClose();
  };

  return createPortal(
    <div className={st.backdrop} onClick={handleBackdropClick}>
      <div className={st.modal}>
        <div className={st.content}>
          <CloseModalBtn className={st.closeBtn} onClick={handleClose} />
          {children}
          <div>
            <button className={st.cancelBtn} onClick={handleClose}>
              {text.Cancel}
            </button>
          </div>
        </div>
      </div>
    </div>,
    modalRoot,
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
