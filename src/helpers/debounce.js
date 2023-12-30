export const debounce = (func, delay) => {
  let timeoutId;

  return (...args) => {
    const later = () => {
      clearTimeout(timeoutId);
      func(...args);
    };

    clearTimeout(timeoutId);
    timeoutId = setTimeout(later, delay);
  };
};
