import React from 'react';
import { View, Text } from 'react-native';

import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Header from '../../components/HeaderComponent/Header';

const ViewProfileScreen = ({ navigation }) => {
    const [userId, setUserId] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [token, setToken] = useState('');

    /* Initializations */
    useEffect(() => {
        const loadUserData = async () => {
            try {
                // Retrieve the values from AsyncStorage
                const storedUserId = await AsyncStorage.getItem('userId');
                const storedUsername = await AsyncStorage.getItem('username');
                const storedPassword = await AsyncStorage.getItem('password');
                const storedRole = await AsyncStorage.getItem('role');
                const storedToken = await AsyncStorage.getItem('token');

                // Update the state with the retrieved values
                setUserId(storedUserId);
                setUsername(storedUsername);
                setPassword(storedPassword);
                setRole(storedRole);
                setToken(storedToken);
            } catch (error) {

                console.log('Error in loading data from AsyncStorage:', error);
            }
        };

        loadUserData();
    }, []);

    /* Navigation Bar Functions */
    const handleBackPress = () => {
        navigation.navigate('HomeScreen');
    };

    const handleHomePress = () => {
        navigation.navigate('HomeScreen');
    };

    const handleProfilePress = () => {
        navigation.navigate('ProfileScreen');
    };

    return (
        <View>
            <Header
                title="Profile"
                onBackPress={handleBackPress}
                onHomePress={handleHomePress}
                onProfilePress={handleProfilePress}
            />
            <Text>UserId :{userId}</Text>
            <Text>Username :{username}</Text>
            <Text>Password :{password}</Text>
            <Text>Token :{token}</Text>
            <Text>Role :{role}</Text>
        </View>
    )
}

export default ViewProfileScreen;