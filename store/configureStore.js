import {createStore,compose,applyMiddleware,combineReducers} from 'redux';
import {rootReducer} from '../Reducers/index';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

export default function configureStore(intialState) {
    return createStore(
        rootReducer,
        intialState,
        //applyMiddleware(thunk,reduxImmutableStateInvariant())
        compose(
            applyMiddleware(thunk,reduxImmutableStateInvariant())
            )

    );
}

