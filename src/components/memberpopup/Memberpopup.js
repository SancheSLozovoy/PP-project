import { GoX } from "react-icons/go";
import {Transition} from 'react-transition-group'
import './Memberpopup.css'

export const MemberPopup = ({isOpen, onClose, children}) => {
    const onWrapperClick  = (event) => {
        if(event.target.classList.contains("modal-wrapper")) onClose()
    }
    return(
        <>
        <Transition in={isOpen} timeout={350} unmountOnExit={true}>
        {(state) => (
        <div className={`modal modal--${state}`}>
            <div className="modal-wrapper" onClick={onWrapperClick}>
                <div className="modal-content">
                    <button  type='button' className="modal-close-button" onClick={() => onClose()}>
                        <GoX/>
                    </button>
                    {children}
                </div>
            </div>
        </div>
        )}
        </Transition>
        </>         
    );
}