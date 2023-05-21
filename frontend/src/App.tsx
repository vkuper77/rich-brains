import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import SearchPanel from "./components/SearchPanel/SearchPanel";

function App() {
    return (
        <>
            <Header/>
            <div className='container-search-filter'>
                <SearchPanel/>
            </div>
        </>
    );
}

export default App;
