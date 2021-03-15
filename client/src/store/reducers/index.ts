import { countryReducer } from './countryReducers';
import { userReducer } from './userReducers';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  user: userReducer,
  country: countryReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
