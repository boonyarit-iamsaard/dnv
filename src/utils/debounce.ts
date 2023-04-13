export const debounce = (fn: () => void, delay: number, immediate: boolean) => {
  let timeout: ReturnType<typeof setTimeout> | null;

  return () => {
    const later = () => {
      timeout = null;
      if (!immediate) fn();
    };
    const callNow = immediate && !timeout;

    clearTimeout(timeout as ReturnType<typeof setTimeout>);

    timeout = setTimeout(later, delay);

    if (callNow) fn();
  };
};
