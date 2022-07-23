import React from 'react';

import ReactModal from 'react-modal';

function Modal({modalIsOpen, modalFunc, data}) {
    console.log(modalIsOpen, data);

    return (
        <ReactModal 
            className="cardnewsModal"
            isOpen={modalIsOpen}
            onRequestClose={()=> modalFunc(false)} // 오버레이나 esc를 누르면 핸들러 동작
            ariaHideApp={false}
            style={{
                overlay: {
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(15, 15, 15, 0.79)",
                },
                content: {
                position: "absolute",
                top: "300px",
                left: "45%",
                width: "50%",
                height: "50%",
                border: "1px solid #ccc",
                background: "#fff",
                overflow: "auto",
                WebkitOverflowScrolling: "touch",
                borderRadius: "4px",
                outline: "none",
                padding: "20px",
                },
            }}
            >
            { data }
            <button onClick={()=> modalFunc(false)}>Modal close</button>
        </ReactModal>
    );
}

export default Modal;