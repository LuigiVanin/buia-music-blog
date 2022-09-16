import { changeTheme, loadTheme, readTheme } from "../service/theme.service";
import "../styles/components/theme-toggle.scss";
import { useEffect, useState } from "react";
import { useTheme } from "../hooks/useTheme";

interface ThemeToggleProps {
    sizeType?: "sm" | "lg";
}

export default function ThemeToggle({ sizeType = "sm" }: ThemeToggleProps) {
    const { theme, action: changeThemeHandler } = useTheme();

    return (
        <div className={`btn-group ${sizeType} ${theme}`}>
            <button onClick={() => changeThemeHandler("light")}>
                <img src="assets/sunny.svg" alt="Light" />
            </button>
            <button onClick={() => changeThemeHandler("dark")}>
                <img src="assets/moon.svg" alt="Dark" />
            </button>
        </div>
    );
}
