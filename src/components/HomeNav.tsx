import { useEffect, useRef, useState } from "react";
import { useSelector } from "../hooks/useSelector";
import "../styles/components/home-nav.scss";

//TODO: tranformar isso em um hook
export default function HomeNav() {
    const selector = useRef(null);
    const { action: onHoverSelector } = useSelector(selector);

    return (
        <header>
            <div className="background" ref={selector}></div>
            <div className="wrapper">
                <p onMouseEnter={onHoverSelector}>Home</p>
            </div>
            |
            <div className="wrapper">
                <p onMouseEnter={onHoverSelector}>About Me</p>
            </div>
            |
            <div className="wrapper">
                <a onMouseEnter={onHoverSelector} href="/blog/">
                    Blog
                </a>
            </div>
            |
            <div className="wrapper">
                <p onMouseEnter={onHoverSelector}>Music</p>
            </div>
        </header>
    );
}
