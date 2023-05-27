import React from "react";
import { TipsContext } from "./context";
import {ProviderProps} from "../../models/context/app-context";
import useTips from "../../hooks/use-tips";

function TipsProvider ({ children }: ProviderProps) {
    const modal = useTips()
    return (
        <TipsContext.Provider value={modal}>
            {children}
        </TipsContext.Provider>
    );
}

export default TipsProvider
