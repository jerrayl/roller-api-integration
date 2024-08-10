export const matchesTarget = (textFields: string[], target: string): boolean => {
    return textFields.filter(text => text?.toLowerCase().includes(target.toLowerCase())).length > 0;
}

export const getDate = (date: Date) => {
    return date.toISOString().substring(0, 10);
}

export const range = (start: number, count: number) => {
    return [...Array(count).keys()].map(x => x + start);
}

export const compareDateComponent = (date1: Date, date2: Date) => {
    date1.setHours(0, 0, 0, 0);
    date2.setHours(0, 0, 0, 0);

    if (date1.valueOf() == date2.valueOf()) { return 0 }
    else if (date1.valueOf() < date2.valueOf()) { return -1 }
    else { return 1 }
}