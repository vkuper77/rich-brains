export enum TypeOptions {
    Name = 1,
    Date = 2,
    Country = 3,
    Asc = 4,
    Desc  = 5
}

export const OPTIONS_FILTER = [
    {id: TypeOptions.Name, name: 'Name'},
    {id: TypeOptions.Date, name: 'Date of birth'},
    {id: TypeOptions.Country, name: 'Country'},
]


export const TAB_OPTIONS = [
    {id: TypeOptions.Asc, name: 'Asc.'},
    {id: TypeOptions.Desc, name: 'Desc.'},
]
