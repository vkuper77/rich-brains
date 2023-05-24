import React from 'react';
import Header from "./components/Header/Header";
import SearchPanel from "./components/SearchPanel/SearchPanel";
import Users from "./components/Users/Users";
import ModalDesk from "./components/ModalDesk/ModalDesk";
import useInitApp from "./hooks/use-init-app";

function App() {
    useInitApp()
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
