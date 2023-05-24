import React, {useEffect, useState} from 'react';

type SortDirection = 'asc' | 'desc';

// todo доработать филтр
const useSortableTable = () => {
    const [data, setData] = useState<[]>([]);
    const [sortParam, setSortParam] = useState<string | null>(null);
    const [sortDirection, setSortDirection] = useState<SortDirection>('asc');
    const [searchTerm, setSearchTerm] = useState<string>('');


        const handleSort = (param: string) => {
            let direction: SortDirection = 'asc';

            if (sortParam === param) {
                direction = sortDirection === 'asc' ? 'desc' : 'asc';
            }

            setSortParam(param);
            setSortDirection(direction);

            const sortedData = [...data].sort((a, b) => {
                // @ts-ignore
                if (a[param] < b[param]) return direction === 'asc' ? -1 : 1;
                // @ts-ignore
                if (a[param] > b[param]) return direction === 'asc' ? 1 : -1;
                return 0;
            });

            // @ts-ignore
            setData(sortedData);
        };


    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const filteredData = data.filter((item) =>
        Object.values(item).some((value) => {
                // @ts-ignore
            return value.toString().toLowerCase().includes(searchTerm.toLowerCase())
            }
        )
    );

    return { handleSearch, filteredData }
};

export default useSortableTable;
