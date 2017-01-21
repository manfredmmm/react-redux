export const FETCH_CATS = 'FETCH_CATS';
export const VOTE_CAT = 'VOTE_CAT';

const listReducer = (prevState = [], action) => {
  switch (action.type) {
    case FETCH_CATS: {
      return action.cats;
    }
    case VOTE_CAT: {
      const idx = prevState.findIndex(cat => cat.id === action.cat.id);

      return [
        ...prevState.slice(0, idx),
        action.cat,
        ...prevState.slice(idx + 1)
      ];
    }
    default:
      return prevState;
  }
};

export default listReducer;
