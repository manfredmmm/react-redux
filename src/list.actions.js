import { VOTE_CAT } from './list.reducer';

export const onVoteCat = cat => ({
  type: VOTE_CAT,
  id: cat.id
});

export default {
  onVoteCat
};
