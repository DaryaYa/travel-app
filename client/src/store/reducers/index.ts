import { otherReducer } from './otherReducers';
import { countryReducer } from './countryReducers';
import { userReducer } from './userReducers';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  user: userReducer,
  country: countryReducer,
  other: otherReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
