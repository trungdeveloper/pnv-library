import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'
import bookReducer from './bookReducer';

const rootReducer = combineReducers({
    book: bookReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
});

export default rootReducer;