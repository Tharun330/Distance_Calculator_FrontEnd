import { createContext } from "react";

//Created context Component to trasfer the state
export const ErrorContext = createContext({

    error: {
        display: false,
        setDisplay: () => { }
    },
});
