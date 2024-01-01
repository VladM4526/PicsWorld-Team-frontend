export const getHoverPosition = element => {
  const hoverSize =
    window.innerWidth > 768
      ? { width: 292, height: 188 }
      : { width: 280, height: 188 };
  const { left, width, top } = element.getBoundingClientRect();
  const leftPos = left + width / 2;
  const leftPosHover =
    leftPos + hoverSize.width > window.innerWidth
      ? leftPos - hoverSize.width
      : leftPos;
  return {
    left: leftPosHover,
    top: top - hoverSize.height,
    width: hoverSize.width,
    height: hoverSize.height,
  };
};
