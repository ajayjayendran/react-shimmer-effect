import React from "react";
import { useShimmer } from "../hooks/useShimmer"; // Import the custom hook

type ShimmerProps = {
  isLoading: boolean;
  duration?: number;
  colorStart?: string;
  colorEnd?: string;
  shape?: "rect" | "circle" | "square";
};

const Shimmer: React.FC<ShimmerProps> = ({
  isLoading,
  duration = 2,
  colorStart = "#f0f0f0",
  colorEnd = "#e0e0e0",
  shape = "rect",
}) => {
  // Use the useShimmer hook to get shimmer state and styles
  const { isShimmering, shimmerStyle } = useShimmer({
    duration,
    colorStart,
    colorEnd,
    shape,
    isLoading,
  });

  if (!isShimmering) return null; // Hide shimmer if not loading

  // Render the shimmer effect
  return (
    <div className={`shimmer ${shimmerStyle.shapeClass}`} style={shimmerStyle}>
      {/* You can add additional elements here if needed */}
    </div>
  );
};

export default Shimmer;
