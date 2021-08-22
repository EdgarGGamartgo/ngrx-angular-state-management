import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { customerReducer } from './../customer/store/reducer/customer.reducer';
import { environment } from '../../environments/environment';


export interface State {
  customer: any;
  vendor: any;
}

export const reducers: ActionReducerMap<State> = {
  customer: customerReducer,
  vendor: customerReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
