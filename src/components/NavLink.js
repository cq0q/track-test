import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import Spacer from './Spacer';
import { withNavigation } from 'react-navigation';


const NavLink = ({ navigation, text, routeName }) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
            <Spacer>
                <Text style={styles.SignInLink}>{text}</Text>
            </Spacer>
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    SignInLink: {
        color: 'blue',
        fontSize: 16,
    },
});



export default withNavigation(NavLink);