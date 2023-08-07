import React from 'react';
import { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import colors from '../../colors';

const LogInScreen = ({ navigation }) => {
    const [userId, setUserId] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [token, setToken] = useState('');

    const verifyLogin = async () => {
        if (username === 'Ruvi' && password === '1234') {
            setUserId('123');
            setRole('user');
            setToken('token123');

            // Store the values in AsyncStorage
            try {
                await AsyncStorage.setItem('userId', userId);
                await AsyncStorage.setItem('username', username);
                await AsyncStorage.setItem('password', password);
                await AsyncStorage.setItem('role', role);
                await AsyncStorage.setItem('token', token);

                // Navigate to the home screen if all values are not null
                if (userId && username && password && role && token) {

                    navigation.navigate('HomeScreen');
                }
            } catch (error) {
                console.log('Error in storing data to AsyncStorage: ', error);
            }

        } else {
            console.log('Invalid username or password');
            Alert('Invalid username or password !');
        }
    }


    return (
        <View style={styles.container}>
            <View style={styles.blueBackground}>
                <Image
                    source={require('../../assets/images/logo.png')}
                    style={styles.logo}
                    resizeMode="contain"
                />
                <Text style={styles.logoText}>Engineered by</Text>
                <Text style={styles.logoText}>INTELLEON</Text>
            </View>
            <View style={styles.whiteBackground}>
                <View style={styles.formContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Username"
                        placeholderTextColor="#777"
                        value={username}
                        onChangeText={(e) => { setUsername(e) }}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        placeholderTextColor="#777"
                        secureTextEntry
                        value={password}
                        onChangeText={(e) => { setPassword(e) }}
                    />
                    <TouchableOpacity style={styles.loginButton} onPress={verifyLogin}>
                        <Text style={styles.loginButtonText}>Log In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primaryBlue,
    },
    blueBackground: {
        height: '50%',
        backgroundColor: colors.primaryBlue,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 160,
        height: 160,
    },
    logoText: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10,
    },
    whiteBackground: {
        flex: 1,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    formContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    input: {
        height: 40,
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 15,
    },
    loginButton: {
        backgroundColor: '#2697FF',
        borderRadius: 5,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 25
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '500',
    },
});

export default LogInScreen;