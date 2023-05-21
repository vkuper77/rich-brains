import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import SearchPanel from "./components/SearchPanel/SearchPanel";
import Users from "./components/Users/Users";

function App() {
    return (
        <>
            <Header/>
            <SearchPanel/>
            <Users/>
        </>
    );
}

export default App;
