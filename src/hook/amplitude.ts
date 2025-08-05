// AMPLITUDE TRACKING DISABLED FOR PRIVACY
// This hook has been disabled to prevent user tracking and data collection

import {useContext} from "react";
import {AmplitudeContext} from "@/context/amplitude";

const useAmplitudeContext = () => {
    const context = useContext(AmplitudeContext);
    // Privacy: Always return no-op functions instead of tracking
    return {
        trackAmplitudeEvent: () => {
            // Privacy: No tracking performed
        }
    };
};

export default useAmplitudeContext;
