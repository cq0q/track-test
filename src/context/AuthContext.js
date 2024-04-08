import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload};
        case 'signup':
            return {errorMessage: '', token: action.payload};
        default:
            return state;
    }
};


const signup = dispatch => {
    return async ({ email, password }) => {
        // what i will do here is make api request to sign up with that email and password
        // if the user signs up, it should modify the state, and say that he is authenticated
        // if signing up fails, it should dispatch an action to update state with an error message and then show that error message in signup component and show the error to the user
        try {
            const response = await trackerApi.post ('/signup', {email, password});
            await AsyncStorage.setItem('token', response.data.token);      // this is a way to store the token (token which the user receives after signing up successfully) in the device storage.
            dispatch ({ type: 'signup', payload: response.data.token});

            navigate('TrackList');
        } catch (err) {
            dispatch({ type: 'add_error', payload: 'Something went wrong with sign up.'});
        }
    };
};

const signin = dispatch => {
    return ({ email, password}) => {
        // the user should try to sign in with his email and password
        // if signing in succeeds, the state should be updated
        // if signing in fails, somehow the error message shall show up
    };
};

const signout = dispatch => {
    return () => {

    };
};


export const { Provider, Context } = createDataContext (
    authReducer,
    {signup, signin, signout},
    { token: null, errorMessage: '' }  // which means if there is no token, there will be no signing in
);