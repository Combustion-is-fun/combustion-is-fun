import React, { useState, useCallback } from "react";
import "./PageCard.css";


const mycss = {color: "black"}
export default function PageCard({ source, title, text, mystyle, URL }) {
    
    /*const bob = bob.bind(window.location.href="#");*/

    return(
        <div className="cardbox" style={mycss} style={mystyle} >
            <a style={{color: "black", textDecoration: "none"}} href={URL}>
                <img 
                    src={source}
                    className="image"
                    alt="Placeholder"
                />
                <h1>{title}</h1>
            <p>{text}</p>
            </a>
        </div>
    );
}
