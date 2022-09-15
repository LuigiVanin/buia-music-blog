export const changeTheme = (type: ThemeColors) => {
    localStorage.setItem("theme", type);
    changeSiteTheming(type);
};

export const readTheme = () => {
    const theme = localStorage.getItem("theme");
    if (!theme || !["light", "dark"].includes(theme)) {
        localStorage.setItem("theme", "light");
        return "light";
    }
    return theme as ThemeColors;
};

export const changeSiteTheming = (type: ThemeColors) => {
    const body = document.querySelector("body");
    body?.style.setProperty("--background-color", `var(--bg-${type}-color)`);
    body?.style.setProperty("--font-color", `var(--font-${type}-color)`);
    body?.style.setProperty("--image-color", `var(--image-${type}-color)`);
    body?.style.setProperty("--selector-color", `var(--selector-${type}-color`);
};

export const loadTheme = () => {
    changeSiteTheming(readTheme());
};
