import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const GeneralButton = ({ backgroundColor, color, onPress, text, icon }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.buttonContainer, { backgroundColor: backgroundColor }]}>
            {icon && <Image source={icon} style={styles.icon} />}
            <Text style={[styles.text, { color: color }]}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 56,
        borderRadius: 8,
        paddingHorizontal: 16,
        margin: 5,
        zIndex: 1,
        opacity: 1

    },
    icon: {
        width: 24,
        height: 24,
        marginRight: 8,
        resizeMode: 'contain',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
});

export default GeneralButton;
