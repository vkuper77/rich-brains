import {Action, State} from "../../state/types";
import React, {ReactNode} from "react";

export interface StateContextProps {
    state: State;
    dispatch: React.Dispatch<Action>;
}

export interface StateProviderProps {
    children: ReactNode;
}
