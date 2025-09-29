
export const dateParser = {
    cleanUpString(dateString: string): string {
        const date = new Date(dateString);
        if (isNaN(date.getTime())) return dateString;
        return `${date.getMonth()+1}/${date.getFullYear()}`;
    }
}