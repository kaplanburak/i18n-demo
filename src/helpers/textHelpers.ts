export const capitalize = (val: string): string => {
    return val
        .split("")
        .map((char: string, i: number, arr: string[]) => {
            const prev = arr[i - 1];
            if (i === 0 || prev === " ") return char.toUpperCase();
            return char;
        })
        .join("");
};
