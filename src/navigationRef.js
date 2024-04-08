import { NavigationActions } from "react-navigation";

// If you didn't understand what this file is for, get back to lecture number 216 (Navigation From Outside of React)


let navigator;

export const setNavigator = (nav) => {
    navigator = nav;
};


export const navigate = (routeName, params) => {
    navigator.dispatch(
        NavigationActions.navigate({
            routeName: routeName,
            params: params
        })
    );
};