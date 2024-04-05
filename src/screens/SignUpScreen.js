import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import Spacer from '../components/Spacer';


const SignUpScreen = ({ navigation }) => {
    const [email, setEmail] = useState ('')
    const [password, setPassword] = useState ('')

    return (
// Spacer is a component that i made in component folder, it is another way of having margin style instead of actually having to type the margin style for each component
       <View style = {styles.container}>
          <Spacer>
             <Text h3>Sign Up for Tracker</Text>
          </Spacer>
          <Input
            label= "Email"
            value= {email}
            onChangeText= {setEmail}
            autoCapitalize= 'none'
            autoCorrect = {false}
          />
          <Spacer />
          <Input
            label="Password"
            value={password}
            onChangeText={setPassword}
            autoCapitalize='none'
            autoCorrect= {false}
            secureTextEntry= {true}  // this is to hide the password when you type on password field
          />
          <Spacer>
             <Button title="Sign Up" ></Button>
          </Spacer>
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