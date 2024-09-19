import { useState, useEffect } from "react";

type ShimmerOptions = {
  duration?: number; // Speed of shimmer effect
  colorStart?: string; // Start color of shimmer
  colorEnd?: string; // End color of shimmer
  shape?: "rect" | "circle" | "square"; // Shape of shimmer
  isLoading?: boolean; // Toggle shimmer on/off
};

export const useShimmer = ({
  duration = 2,
  colorStart = "#f0f0f0",
  colorEnd = "#e0e0e0",
  shape = "rect",
  isLoading = true,
}: ShimmerOptions) => {
  const [isShimmering, setIsShimmering] = useState(isLoading);

  // Handle loading state
  useEffect(() => {
    setIsShimmering(isLoading);
  }, [isLoading]);

  // Return shimmer state and styles to apply
  return {
    isShimmering,
    shimmerStyle: {
      background: `linear-gradient(90deg, ${colorStart}, ${colorEnd})`,
      animation: `shimmer ${duration}s infinite`,
      shapeClass:
        shape === "rect"
          ? "shimmer-rect"
          : shape === "circle"
          ? "shimmer-circle"
          : "shimmer-square",
    },
  };
};
