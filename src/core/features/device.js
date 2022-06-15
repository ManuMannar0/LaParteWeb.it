import useWindowSize from "react-hook-usewindowsize";

export const useIsLandscape = () => useWindowSize().width > useWindowSize().height
export const useWidthWindowSize = () => useWindowSize().width
export const useHeightWindowSize = () => useWindowSize().height