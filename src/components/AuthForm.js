import React, { useState} from 'react';
import { StyleSheet } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import Spacer from './Spacer';


const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText}) => {
    const [email, setEmail] = useState ('');
    const [password, setPassword] = useState ('');

    return (
        <>
        <Spacer>
            <Text h3>{headerText}</Text>
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
        {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
        <Spacer>
            <Button title={submitButtonText} onPress={() => onSubmit({email, password})}></Button>
        </Spacer>
        </>
    );
};



const styles = StyleSheet.create({
    errorMessage: {
        fontSize: 18,
        color: 'red',
        marginLeft: 25,
    },
});



export default AuthForm;
