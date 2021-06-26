import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import styled from "styled-components";

const Backdrop = styled("div")`
  position: fixed;
  z-index: 1040;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #000;
  opacity: 0.5;
`;

const ModalWrapper = styled(Modal)`
@media (min-width: 576px){
    .modal-dialog {
        max-width:80vw;
        max-height:70vh;
        margin: 1.75rem auto;
    }
}
`;

export default (props) => {
    const [show, setShow] = useState(false);
    const renderBackdrop = (props) => <Backdrop {...props} />;

    useEffect(() => {
        setShow(props.show);
    }, [props.show])

    const handleHide = ()=>{
        setShow(false);
        props.handleHideModal();
    }

    return (
        <ModalWrapper
            show={show}
            onHide={handleHide}
            renderBackdrop={renderBackdrop}
            aria-labelledby="modal-label"
        >
            {props.image && 
                <div>
                    <img src={props.image.src} width={props.width}/>
                </div>
            }
        </ModalWrapper>
    );
}
