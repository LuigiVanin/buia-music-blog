import { useEffect, useState } from "react";
import { changeTheme, readTheme } from "../service/theme.service";

export const useTheme = () => {
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        setTheme(readTheme());
    }, []);

    const changeThemeHandler = (value: ThemeColors) => {
        changeTheme(value);
        setTheme(value);
    };

    return {
        theme,
        action: changeThemeHandler,
    };
};
