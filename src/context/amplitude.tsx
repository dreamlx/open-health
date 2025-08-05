// AMPLITUDE TRACKING DISABLED FOR PRIVACY
// This file has been disabled to prevent user tracking and data collection

"use client";
import React from "react";

// Dummy context for compatibility
export const AmplitudeContext = React.createContext({});

// No-op tracking functions for compatibility
const trackAmplitudeEvent = () => {
    // Privacy: No tracking performed
};

const AmplitudeContextProvider = ({children}: React.PropsWithChildren) => {
    // Privacy: No analytics initialization or user tracking
    return (
        <AmplitudeContext.Provider value={{trackAmplitudeEvent}}>
            {children}
        </AmplitudeContext.Provider>
    );
};

export default AmplitudeContextProvider;
