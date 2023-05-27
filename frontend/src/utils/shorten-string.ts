export function shortenString(input: string, maxLength: number): string {
    if (input.length <= maxLength) {
        return input;
    }

    const shortened = input.substr(0, maxLength).trim();
    return `${shortened}...`;
}
