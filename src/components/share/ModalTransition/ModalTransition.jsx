import { useEffect } from 'react';
import { Transition } from 'react-transition-group';
// import Portal from './Portal';
import './ModalTransition.css';

const ModalTransition = ({ active, closeModal, children }) => {
  useEffect(() => {
    const onKeydown = e => {
      if (e.code !== 'Escape') return;
      closeModal();
    };

    window.addEventListener('keydown', onKeydown);
    return () => window.removeEventListener('keydown', onKeydown);
  }, [closeModal]);

  const onBackdropClick = event => {
    if (event.target.classList.contains('backdrop')) closeModal();
  };

  return (
    <>
      <Transition in={active} timeout={500} unmountOnExit={true}>
        {state => (
          <div
            onClick={onBackdropClick}
            className={`backdrop backdrop--${state}`}
          >
            <div className="modalContent">{children}</div>
          </div>
        )}
      </Transition>
    </>
  );
};

export default ModalTransition;
