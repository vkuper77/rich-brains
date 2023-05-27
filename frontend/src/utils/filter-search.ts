function allSymbolSearch(data: any[] = [], key: string = '', value: string = ''): any[] {
    return data.filter((itm) => {
        const itmValue = String(itm[key]).toLowerCase();
        const searchValue = value.toLowerCase();
        return itmValue.includes(searchValue);
    })
}

function firstSymbolSearch(data: any[] = [], key: string = '', value: string = ''): any[] {
    return data.filter((itm) => {
        const itmValue = String(itm[key]).toLowerCase();
        const searchValue = value.toLowerCase();
        return itmValue.startsWith(searchValue);
    })
}

export function filterSearch(data: any[] = [], key: string = '', value: string = ''): any[] {
    return allSymbolSearch(data, key, value)
    // return firstSymbolSearch(data, key, value)
}
