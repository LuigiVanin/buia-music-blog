export const convertToDate = (date: `${number}/${number}/${number}`) => {
    const parts = date.split("/");
    return new Date(Number(parts[1] + "/" + parts[0] + "/" + parts[2]));
};
