import React from 'react'
import Header from "./components/Header/Header"
import SearchPanel from "./components/SearchPanel/SearchPanel"
import Users from "./components/Users/Users"
import ModalDesk from "./components/ModalDesk/ModalDesk"
import useInitApp from "./hooks/use-init-app"
import Tips from "./components/Tips/Tips"

function App() {
	useInitApp()
	return (
		<>
			<Tips />
			<Header />
			<SearchPanel />
			<Users />
			<ModalDesk />
		</>
	)
}

export default App
