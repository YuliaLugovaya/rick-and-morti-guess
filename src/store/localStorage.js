export const loadState = () => {
  try {
    const serialState = localStorage.getItem('characters');
    if (serialState === null) {
      return undefined;
    }
    return JSON.parse(serialState);
  } catch (error) {
    return undefined;
  }
};

export const saveState = state => {
  try {
    const serialState = JSON.stringify(state);
    localStorage.setItem('characters', serialState);
  } catch (error) {
    console.log(error);
  }
};