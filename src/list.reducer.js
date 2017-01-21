export const VOTE_CAT = 'VOTE_CAT';

const listReducer = (prevState = [], action) => {
  switch (action.type) {
    case VOTE_CAT: {
      const idx = prevState.findIndex(cat => cat.id === action.id);
      const cat = prevState[idx];

      const newCat = {
        ...cat,
        votes: cat.votes + 1
      };

      return [
        ...prevState.slice(0, idx),
        newCat,
        ...prevState.slice(idx + 1)
      ];
    }
    default:
      return prevState;
  }
};

export default listReducer;
