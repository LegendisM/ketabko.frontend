export const convertDate = (date: string | Date, region: "fa-IR" | "en-US" = "fa-IR") => {
    const datetime = new Date(date);
    const result = datetime.toLocaleDateString(region, { year: 'numeric', month: 'long', day: 'numeric' });
    return result;
}