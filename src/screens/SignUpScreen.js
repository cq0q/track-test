import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';


const SignUpScreen = ({ navigation }) => {
    const {state, signup} = useContext(AuthContext);



    return (
// Spacer is a component that i made in component folder, it is another way of having margin style instead of actually having to type the margin style for each component
       <View style = {styles.container}>
        <AuthForm
        headerText="Sign Up for Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign Up"
        onSubmit={signup}
        />
        <NavLink
        text= "Already have an account? Sign in instead!"
        routeName="Signin"
        />
       </View>
    );
};

SignUpScreen.navigationOptions = () => {
    return {
        headerShown: false
    };
};


const styles = StyleSheet.create({
    container: {
        flex: 1,   // this is so it takes the whole screen instead of only the content, if you don't get it, put: (borderColor: "red") and (borderWidth: 10) under the (flex style) then see it with and without the (flex style)
        justifyContent: "center",   // this is so it become centered instead of being so much to the top
        marginBottom:250,   // this is to lift the content a little bit more to the top because after i put (justifyContent: "center") it became exactly centered in un-wanted way
    },
});


export default SignUpScreen;