import React from 'react';
import './style.css'

interface SearchInput {
    placeholder?: string;
    value?: string;
    setValue?: (value: string) => void
}

const SearchInput: React.FC<SearchInput> = ({placeholder = '', value = '', setValue = () => undefined}) => {
    return (
        <div className='container'>
            <img alt='icon' className='search' src={require('../../../../assets/image/search.png')}/>
            <input
                value={value}
                onChange={e => setValue?.(e.target.value)}
                placeholder={placeholder}
                className='input'
            />
        </div>
    );
};

export default SearchInput;
