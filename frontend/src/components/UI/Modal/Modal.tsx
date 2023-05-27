import React, {MouseEventHandler, ReactNode, useCallback} from 'react';
import './style.css'

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({isOpen, onClose, children}) => {

    const overlayStyles: React.CSSProperties = {
        visibility: isOpen ? 'visible' : 'hidden',
        opacity: isOpen ? 1 : 0,
    }

    const handleClick: MouseEventHandler<HTMLDivElement> = useCallback((e) => {
        e.stopPropagation()
    }, [])

    return (
        <div
            className='modal-wrapper'
            style={overlayStyles}
            onClick={onClose}
        >
            <div className='modal-container' onClick={handleClick}>
                {children}
            </div>
        </div>
    );
};

export default Modal
