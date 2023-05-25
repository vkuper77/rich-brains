import React, {MouseEventHandler, ReactNode, useCallback, useMemo} from 'react';
import './style.css'

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

const Modal = ({isOpen, onClose, children}: ModalProps) => {

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
