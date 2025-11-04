export const getHideAnimationStyles = (isAnimating: boolean) => {
  return {
    opacity: isAnimating ? 0 : 1,
    transition: `opacity .3s ease-in-out`,
  } as const;
};
