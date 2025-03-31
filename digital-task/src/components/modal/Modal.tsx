type ModalProps = {
  isOpen: boolean;
  children: React.ReactNode;
  onClose: () => void;
};

const Modal = ({ isOpen, children, onClose }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
        <button className="modal-close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
