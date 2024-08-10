export const matchesTarget = (textFields: string[], target: string): boolean => {
    return textFields.filter(text => text?.toLowerCase().includes(target.toLowerCase())).length > 0;
}