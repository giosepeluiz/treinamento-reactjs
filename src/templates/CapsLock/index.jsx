import React, { useState } from 'react';
import './style.min.css';

const CapsLock = () => {
    const [text, setText] = useState(null);
    const [caps, setCaps] = useState("NENHUM TEXTO DIGITADO...");

    const handleConvert = () => {
        setCaps(text.toUpperCase());
    }

    return (
        <div>
            <input type="text" onChange={ (e) => setText(e.target.value) } />
            <button onClick={ handleConvert }>Caps Lock Convert</button>
            <div className="converted">
                {caps}
            </div>
        </div>
    );
};

export default CapsLock;