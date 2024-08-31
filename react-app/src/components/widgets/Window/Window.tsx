import React from 'react';
import "./Window.css"

export default function Window () {
    return(
        <>
            <div className="container">
                <div className="interior">
                    <a className="btn" href="#open-modal">👋 Basic CSS-Only Modal</a>
                </div>
            </div>
            <div id="open-modal" className="modal-window">
                <div>
                    <a href="#" title="Close" className="modal-close">Close</a>
                </div>
            </div>
        </>
    )
}