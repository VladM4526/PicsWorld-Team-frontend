export const getHoverPosition = (element, parent) => {
  const hoverSize =
    window.innerWidth > 768
      ? { width: 292, height: 188 }
      : { width: 280, height: 188 };
  const { width, right, top } = element.getBoundingClientRect();
  const rightPos = parent.right - right + width / 2;
  const rightPosHover =
    right - width / 2 - hoverSize.width < 0
      ? rightPos - hoverSize.width
      : rightPos;
  return {
    right: rightPosHover,
    top: top - parent.top - hoverSize.height,
    width: hoverSize.width,
    height: hoverSize.height,
  };
};
