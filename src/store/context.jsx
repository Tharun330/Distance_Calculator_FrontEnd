import { createContext } from "react";

export const ErrorContext = createContext({

    error: {
        display: false,
        setDisplay: () => { }
    },
});
