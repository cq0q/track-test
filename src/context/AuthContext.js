import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
};


const signup = dispatch => {
    return ({ email, password }) => {
        // what i will do here is make api request to sign up with that email and password
        // if the user signs up, it should modify the state, and say that he is authenticated
        // if signing up fails, i probably need to reflect an error message somehow
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
    {},
    { isSignedIn: false }
);