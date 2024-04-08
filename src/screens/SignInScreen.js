import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import NavLink from '../components/NavLink';
import AuthForm from '../components/AuthForm';



const SignInScreen = () => {
    return (
        <View style={styles.container}>
            <AuthForm
              headerText="Sign in to Your Account"
              errorMessage=""
              submitButtonText="Sign In"
              onSubmit={() => {}}
            />
            <NavLink
            text="Don't have an account? Sign up instead!"
            routeName="Signup"
            />
        </View>
    );
};


SigninScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
};



const styles = StyleSheet.create({
    container: {
        flex: 1,   // this is so it takes the whole screen instead of only the content, if you don't get it, put: (borderColor: "red") and (borderWidth: 10) under the (flex style) then see it with and without the (flex style)
        justifyContent: "center",   // this is so it become centered instead of being so much to the top
        marginBottom:250,   // this is to lift the content a little bit more to the top because after i put (justifyContent: "center") it became exactly centered in un-wanted way
    },
});


export default SignInScreen;