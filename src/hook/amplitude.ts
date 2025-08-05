// AMPLITUDE TRACKING DISABLED FOR PRIVACY
// This hook has been disabled to prevent user tracking and data collection

const useAmplitudeContext = () => {
    // Privacy: No context needed, always return no-op functions instead of tracking
    return {
        trackAmplitudeEvent: () => {
            // Privacy: No tracking performed
        }
    };
};

export default useAmplitudeContext;
