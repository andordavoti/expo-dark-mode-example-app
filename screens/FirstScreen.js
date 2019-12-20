import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default FirstScreen = (props) => {
    let theme = props.screenProps;
    return (
        <View style={theme === 'dark' ? styles.containerDark : styles.containerLight}>
            <Text style={theme === 'dark' ? styles.textDark : styles.textLight}>FirstScreen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    containerLight: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    containerDark: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'black'
    },
    textLight: {
        textAlign: 'center',
        color: 'black'
    },
    textDark: {
        textAlign: 'center',
        color: 'white'
    },
});