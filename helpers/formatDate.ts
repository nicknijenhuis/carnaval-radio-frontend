export const formatDate = (isoDate: any) => {
    const date = new Date(isoDate);

    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are zero-based
    const year = date.getFullYear();

    const formattedDate = `${day.toString()}-${month.toString()}-${year}`;
    return formattedDate;
};