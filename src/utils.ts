/**
 * Filter an array of objects based on a filter object.
 * @param array The array to filter.
 * @param filters The filters to apply.
 * @returns The filtered array.
 */
export function filterArray<T>(array: T[], filters: Partial<T>): T[] {
    if (!filters) return array;

    // Filter the response based on the filter object
    return array.filter((item) => {
        return Object.keys(filters).every((key) => {
            // @ts-ignore
            return item[key] === filters[key];
        });
    });
}