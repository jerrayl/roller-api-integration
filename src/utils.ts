export const matchesTarget = (textFields: string[], target: string): boolean => {
    return textFields.filter(text => text?.toLowerCase().includes(target.toLowerCase())).length > 0;
}

export const getDate = (date: Date) => {
    return date.toISOString().substring(0, 10);
}