import React, {useEffect, useState} from 'react';
import {TipsType} from "../costansts/type-modal";

function useTips() {
    const [data, setDate] = useState<{ type: TipsType, message: string, duration: number } | null>(null)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDate(null);
        }, data?.duration);
        return () => clearTimeout(timeout);
    }, [data]);

    return {data, setShowTips: setDate}
};

export default useTips;
