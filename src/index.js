import './style.css';
import { useState } from 'react';
import React from 'react';

const Aerofole = ({title, background, color, children}) => {
    const [open, setOpen] = useState(false);

    const handleClick = ()=>{
        setOpen(!open)
    }

    return (
        <div className="accordion">
            <div className="title" style={{color, background}} onClick={handleClick}>
                <span>{title}</span>
                <span className="more">{!open && '. . .' }</span>
            </div>
            {open && children}
        </div>
    )
}

export default Aerofole