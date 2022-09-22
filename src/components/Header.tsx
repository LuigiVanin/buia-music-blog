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
                    <img src="/assets/musical-notes.svg" alt="music" />/
                    <ul>
                        <li onMouseOver={action}>
                            <a href="/">home</a>
                        </li>
                        <li onMouseOver={action}>
                            <a href=""> about</a>
                        </li>
                        <li onMouseOver={action}>
                            <a href=""> music</a>
                        </li>
                    </ul>
                </nav>
                <ThemeToggle sizeType="sm" />
            </div>
        </header>
    );
}
