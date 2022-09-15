import { useEffect, useRef, useState } from "react";
import "../styles/components/home-header.scss";

export default function HomeHeader() {
    const [width, setWidth] = useState();
    const [left, setLeft] = useState();
    const selector = useRef(null);

    useEffect(() => {
        const el = selector.current as any;
        el.style.setProperty("width", `${width}px`);
        el.style.setProperty("left", `${left}px`);
    }, [width, left]);

    const onHoverSelector = (event: any) => {
        const target = event.target;
        setWidth(target.offsetWidth);
        setLeft(target.offsetLeft);
    };

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
                <p onMouseEnter={onHoverSelector}>Blog</p>
            </div>
            |
            <div className="wrapper">
                <p onMouseEnter={onHoverSelector}>Music</p>
            </div>
        </header>
    );
}
