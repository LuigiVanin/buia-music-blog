import { changeTheme, loadTheme, readTheme } from "../service/theme.service";
import "../styles/components/theme-toggle.scss";
import LightIcon from "../assets/sunny.svg";
import DarkIcon from "../assets/moon.svg";
import { useEffect, useState } from "react";

interface ThemeToggleProps {
    sizeType?: "sm" | "md";
}

export default function ThemeToggle({ sizeType }: ThemeToggleProps) {
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        setTheme(readTheme());
    }, []);

    const changeThemeHandler = (value: ThemeColors) => {
        console.log(value);
        changeTheme(value);
        setTheme(value);
    };
    return (
        <div className={`btn-group ${theme}`}>
            <button onClick={() => changeThemeHandler("light")}>
                <img src={LightIcon} alt="Light" />
            </button>
            <button onClick={() => changeThemeHandler("dark")}>
                <img src={DarkIcon} alt="Dark" />
            </button>
        </div>
    );
}
