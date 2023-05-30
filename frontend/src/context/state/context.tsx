import React, {createContext, useContext} from "react"
import { initialState} from "../../state"
import {StateContextProps} from "../../models/context/state-context"

export const StateContext = createContext<StateContextProps>({
	state: initialState,
	dispatch: () => undefined,
})

export const useStateContext = () => useContext(StateContext)

