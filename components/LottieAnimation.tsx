import React from "react";
import Lottie, { LottieComponentProps } from "lottie-react";

interface LottieAnimationProps
  extends Omit<LottieComponentProps, "animationData"> {
  animationData: unknown;
  className?: string;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({
  animationData,
  className,
  ...props
}) => {
  return (
    <div className={className}>
      <Lottie animationData={animationData} {...props} />
    </div>
  );
};

export default LottieAnimation;
