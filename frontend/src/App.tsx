import React from 'react';
import Header from "./components/Header/Header";
import SearchPanel from "./components/SearchPanel/SearchPanel";
import Users from "./components/Users/Users";
import ModalDesk from "./components/ModalDesk/ModalDesk";

function App() {
    return (
        <>
            <Header />
            <SearchPanel />
            <Users />
            <ModalDesk />
        </>
    );
}

export default App;
