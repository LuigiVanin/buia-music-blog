import { useRef } from "react";
import { useSelector } from "../hooks/useSelector";
import "../styles/components/header.scss";

import ThemeToggle from "./ThemeToggle";

export default function Header() {
    const selector = useRef(null);
    const { action } = useSelector(selector);

    return (
        <header>
            <div className="wrapper">
                <div className="background" ref={selector}></div>
                <nav>
                    <img
                        className="logo"
                        src="/assets/code-outline.svg"
                        alt="music"
                    />
                    /
                    <ul>
                        <li onMouseOver={action}>
                            <a href="/">home</a>
                        </li>
                        <li onMouseOver={action}>
                            <a href="/about-me"> about</a>
                        </li>
                        <li onMouseOver={action}>
                            <a href=""> projects</a>
                        </li>
                    </ul>
                </nav>
                <ThemeToggle sizeType="sm" />
            </div>
        </header>
    );
}
