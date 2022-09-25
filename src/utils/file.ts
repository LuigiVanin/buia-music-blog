export const getFileName = (path: string) => {
    const filename = path.split("/").slice(-1)[0];
    return filename.replace(".md", "");
};
