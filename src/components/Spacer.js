import React from 'react'
import { View, StyleSheet } from 'react-native'


    // This component file is another way to style components with margin instead of typing the styles for each one
    // if you want to understand more about it, get back to lecture number 204 (Helper Styling Components)
    
const Spacer = ({ children }) => {
    return <View style={styles.spacer} >{children}</View>
};


const styles = StyleSheet.create({
    spacer: {
        margin: 15
    },
});


export default Spacer;
