import "../styles/components/theme-toggle.scss";
import type { CSSProperties } from "react";
import { useTheme } from "../hooks/useTheme";

interface ThemeToggleProps {
    sizeType?: Size;
}

type Size = "sm" | "lg";

export default function ThemeToggle({ sizeType = "lg" }: ThemeToggleProps) {
    const { theme, action: changeThemeHandler } = useTheme();

    const defineSize = (size: Size) => {
        return {
            w: size === "lg" ? 165 : 100,
            h: size === "lg" ? 45 : 30,
            r: size === "lg" ? 15 : 7,
            img: size === "lg" ? 26 : 18,
        };
    };

    const buildCSSValue = (value: number | string) => {
        return `${value}px`;
    };

    const buildDivStyle = (size: Size): CSSProperties => {
        const { h, r, w } = defineSize(size);
        return {
            width: buildCSSValue(w),
            height: buildCSSValue(h),
            borderRadius: buildCSSValue(r),
        };
    };

    const buildImgStyle = (size: Size): CSSProperties => {
        const { img } = defineSize(size);
        return {
            height: buildCSSValue(img),
        };
    };

    return (
        <div
            className={`btn-group ${sizeType} ${theme}`}
            style={buildDivStyle(sizeType)}
        >
            <button onClick={() => changeThemeHandler("light")}>
                <img
                    src="/assets/sunny.svg"
                    alt="Light"
                    style={buildImgStyle(sizeType)}
                />
            </button>
            <button onClick={() => changeThemeHandler("dark")}>
                <img
                    src="/assets/moon.svg"
                    alt="Dark"
                    style={buildImgStyle(sizeType)}
                />
            </button>
        </div>
    );
}
