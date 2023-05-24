import React, {ReactNode} from "react";
import {Action, State} from "../../state/types";

export interface StateContextProps {
    state: State;
    dispatch: React.Dispatch<Action>;
}

export interface StateProviderProps {
    children: ReactNode;
}
