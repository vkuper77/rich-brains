export enum TypeOptions {
    Name = 1,
    Date = 2,
    Country = 3,
    Asc = 4,
    Desc = 5,
}

export type FilterOption = {
    id: TypeOptions;
    name: string;
    key?: string;
};

export const OPTIONS_FILTER: FilterOption[] = [
    { id: TypeOptions.Name, name: 'Name', key: 'name' },
    { id: TypeOptions.Date, name: 'Date of birth', key: 'date',},
    { id: TypeOptions.Country, name: 'Country' , key: 'country'},
];

export const TAB_OPTIONS: FilterOption[] = [
    { id: TypeOptions.Asc, name: 'Asc.' },
    { id: TypeOptions.Desc, name: 'Desc.' },
];
