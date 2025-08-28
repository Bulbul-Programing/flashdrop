
export const GetLastTwelveMonthLabel = (): string[] => {
    const out: string[] = [];
    const now = new Date();
    for (let i = 11; i >= 0; i--) {
        const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
        const label = date.toLocaleString("default", {
            month: "short",
            year: "numeric",
        });
        out.push(label);
    }
    return out;
}